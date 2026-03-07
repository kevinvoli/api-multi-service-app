import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDriver } from '../users/register-driver/entities/register-driver.entity';
import { Trips } from '../transport/trips/entities/trip.entity';

// ─── Haversine ───────────────────────────────────────────────────────────────
function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

@Injectable()
export class GeoService {
  private readonly logger = new Logger(GeoService.name);

  constructor(
    @InjectRepository(RegisterDriver)
    private readonly driverRepo: Repository<RegisterDriver>,
    @InjectRepository(Trips)
    private readonly tripRepo: Repository<Trips>,
  ) {}

  // ─── PATCH /geo/driver/:id/position ─────────────────────────────────────
  // Remplace : ajax_update_driver_location.php

  async updateDriverPosition(
    driverId: number,
    lat: string,
    lon: string,
  ): Promise<{ updated: boolean }> {
    const result = await this.driverRepo.update(
      { iDriverId: driverId },
      { vLatitude: lat, vLongitude: lon },
    );
    return { updated: (result.affected ?? 0) > 0 };
  }

  // ─── GET /geo/drivers/nearby ─────────────────────────────────────────────
  // Remplace : ajax_getdirver.php — chauffeurs actifs dans un rayon donné

  async findNearbyDrivers(
    lat: number,
    lon: number,
    radiusKm = 5,
    vehicleTypeId?: number,
    companyId?: number,
  ): Promise<
    {
      iDriverId: number;
      vName: string;
      vLastName: string;
      vPhone: string;
      vImage: string;
      vLatitude: string;
      vLongitude: string;
      distanceKm: number;
      vAvgRating: string;
    }[]
  > {
    const qb = this.driverRepo
      .createQueryBuilder('d')
      .where('d.eStatus = :status', { status: 'active' })
      .andWhere('d.vLatitude != :empty AND d.vLongitude != :empty', { empty: '' });

    if (companyId) {
      qb.andWhere('d.iCompanyId = :companyId', { companyId });
    }

    const drivers = await qb
      .select([
        'd.iDriverId',
        'd.vName',
        'd.vLastName',
        'd.vPhone',
        'd.vImage',
        'd.vLatitude',
        'd.vLongitude',
        'd.vAvgRating',
        'd.iDriverVehicleId',
      ])
      .getMany();

    return drivers
      .filter((d) => {
        const dLat = parseFloat(d.vLatitude);
        const dLon = parseFloat(d.vLongitude);
        if (isNaN(dLat) || isNaN(dLon)) return false;
        const dist = haversineKm(lat, lon, dLat, dLon);
        return dist <= radiusKm;
      })
      .map((d) => {
        const dLat = parseFloat(d.vLatitude);
        const dLon = parseFloat(d.vLongitude);
        return {
          iDriverId: d.iDriverId,
          vName: d.vName,
          vLastName: d.vLastName,
          vPhone: d.vPhone,
          vImage: d.vImage,
          vLatitude: d.vLatitude,
          vLongitude: d.vLongitude,
          distanceKm: Math.round(haversineKm(lat, lon, dLat, dLon) * 100) / 100,
          vAvgRating: d.vAvgRating,
        };
      })
      .sort((a, b) => a.distanceKm - b.distanceKm);
  }

  // ─── GET /geo/trip/:tripId ───────────────────────────────────────────────
  // Remplace : ajax_getdirver_detail.php
  // Retourne les détails du trajet + chauffeur pour les statuts actifs

  async getTripWithDriver(tripId: number): Promise<{
    trip: Partial<Trips>;
    driver: Partial<RegisterDriver> | null;
  }> {
    const trip = await this.tripRepo
      .createQueryBuilder('t')
      .leftJoinAndSelect('t.iDriver', 'driver')
      .where('t.iTripId = :tripId', { tripId })
      .andWhere('t.iActive IN (:...statuses)', {
        statuses: ['Active', 'On Going Trip', 'Arrived'],
      })
      .getOne();

    if (!trip) {
      throw new NotFoundException(`Trajet #${tripId} introuvable ou terminé`);
    }

    const driver = trip.iDriver ?? null;

    return {
      trip: {
        iTripId: trip.iTripId,
        iUserId: trip.iUserId,
        iDriverId: trip.iDriverId,
        iCompanyId: trip.iCompanyId,
        iActive: trip.iActive,
        tStartLat: trip.tStartLat,
        tStartLong: trip.tStartLong,
        tEndLat: trip.tEndLat,
        tEndLong: trip.tEndLong,
        tSaddress: trip.tSaddress,
        tDaddress: trip.tDaddress,
        iFare: trip.iFare,
        fDistance: trip.fDistance,
        fDuration: trip.fDuration,
        vTripPaymentMode: trip.vTripPaymentMode,
        eType: trip.eType,
        tTripRequestDate: trip.tTripRequestDate,
      },
      driver: driver
        ? {
            iDriverId: driver.iDriverId,
            vName: driver.vName,
            vLastName: driver.vLastName,
            vPhone: driver.vPhone,
            vImage: driver.vImage,
            vLatitude: driver.vLatitude,
            vLongitude: driver.vLongitude,
            vAvgRating: driver.vAvgRating,
          }
        : null,
    };
  }

  // ─── POST /geo/distance ──────────────────────────────────────────────────
  // Calcul de distance Haversine entre deux points GPS
  // Optionnellement, délègue à Google Directions API si la clé est configurée

  async calculateDistance(
    originLat: number,
    originLon: number,
    destLat: number,
    destLon: number,
  ): Promise<{ distanceKm: number; estimatedMinutes: number; source: string }> {
    const googleKey = process.env.GOOGLE_MAPS_API_KEY;

    if (googleKey) {
      try {
        const result = await this._googleDirections(originLat, originLon, destLat, destLon, googleKey);
        if (result) return result;
      } catch (err) {
        this.logger.warn('Google Directions fallback to Haversine: ' + err.message);
      }
    }

    const distanceKm = Math.round(haversineKm(originLat, originLon, destLat, destLon) * 100) / 100;
    // Estimation : 30 km/h moyenne en ville
    const estimatedMinutes = Math.round((distanceKm / 30) * 60);

    return { distanceKm, estimatedMinutes, source: 'haversine' };
  }

  private _googleDirections(
    oLat: number,
    oLon: number,
    dLat: number,
    dLon: number,
    key: string,
  ): Promise<{ distanceKm: number; estimatedMinutes: number; source: string } | null> {
    return new Promise((resolve) => {
      const https = require('https');
      const path =
        `/maps/api/directions/json?origin=${oLat},${oLon}&destination=${dLat},${dLon}&key=${key}`;
      const req = https.get({ hostname: 'maps.googleapis.com', path }, (res: any) => {
        let raw = '';
        res.on('data', (c: any) => (raw += c));
        res.on('end', () => {
          try {
            const data = JSON.parse(raw);
            const leg = data?.routes?.[0]?.legs?.[0];
            if (!leg) return resolve(null);
            const distanceKm = Math.round((leg.distance.value / 1000) * 100) / 100;
            const estimatedMinutes = Math.round(leg.duration.value / 60);
            resolve({ distanceKm, estimatedMinutes, source: 'google' });
          } catch {
            resolve(null);
          }
        });
      });
      req.on('error', () => resolve(null));
    });
  }
}
