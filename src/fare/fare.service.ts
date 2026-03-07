import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehicleType } from '../vehicles/vehicle-type/entities/vehicle-type.entity';
import { Coupon } from '../payments/coupon/entities/coupon.entity';
import { EstimateFareDto } from './dto/estimate-fare.dto';

export interface FareBreakdown {
  baseFare: number;
  distanceFare: number;
  timeFare: number;
  surgeMultiplier: number;
  surgeType: 'None' | 'PickUp' | 'Night';
  surgeLabel?: string;
  subtotal: number;
  discount: number;
  totalFare: number;
  minFareApplied: boolean;
  currency: string;
  breakdown: Array<{ label: string; value: string }>;
}

@Injectable()
export class FareService {
  constructor(
    @InjectRepository(VehicleType)
    private readonly vehicleTypeRepo: Repository<VehicleType>,
    @InjectRepository(Coupon)
    private readonly couponRepo: Repository<Coupon>,
  ) {}

  // ─── Estimation principale ───────────────────────────────────────────────────

  async estimate(dto: EstimateFareDto): Promise<FareBreakdown> {
    const vehicle = await this.vehicleTypeRepo.findOneBy({
      iVehicleTypeId: dto.vehicleTypeId,
    });
    if (!vehicle) throw new NotFoundException(`Vehicle type #${dto.vehicleTypeId} not found`);

    const bookingDate = dto.bookingDate ? new Date(dto.bookingDate) : new Date();
    const distance = Math.round(dto.distanceKm * 100) / 100;
    const duration = Math.round(dto.durationMin * 100) / 100;

    // 1. Calcul du surge pricing
    const surge = this.getSurge(vehicle, bookingDate);

    // 2. Calcul du tarif selon le type
    let baseFare = 0;
    let distanceFare = 0;
    let timeFare = 0;

    switch (vehicle.eFareType) {
      case 'Fixed':
        baseFare = vehicle.fFixedFare;
        break;

      case 'Hourly':
        const hours = duration / 60;
        baseFare = vehicle.fPricePerHour * Math.max(hours, vehicle.fMinHour);
        break;

      case 'Regular':
      default:
        baseFare = vehicle.iBaseFare;
        distanceFare = vehicle.fPricePerKm * distance;
        timeFare = vehicle.fPricePerMin * duration;
        break;
    }

    // 3. Appliquer le surge
    let subtotal = (baseFare + distanceFare + timeFare) * surge.multiplier;
    subtotal = Math.round(subtotal * 100) / 100;

    // 4. Appliquer le tarif minimum
    const minFareApplied = subtotal < vehicle.iMinFare;
    if (minFareApplied) subtotal = vehicle.iMinFare;

    // 5. Appliquer le code promo
    let discount = 0;
    if (dto.promoCode) {
      discount = await this.applyPromo(dto.promoCode, subtotal, dto.iUserId);
    }

    const totalFare = Math.round((subtotal - discount) * 100) / 100;

    // 6. Construire le détail ligne par ligne (compatible PHP legacy)
    const breakdown = this.buildBreakdown(vehicle, {
      baseFare,
      distanceFare,
      timeFare,
      surge,
      subtotal,
      discount,
      totalFare,
      minFareApplied,
      distance,
      duration,
    });

    return {
      baseFare,
      distanceFare,
      timeFare,
      surgeMultiplier: surge.multiplier,
      surgeType: surge.type,
      surgeLabel: surge.label,
      subtotal,
      discount,
      totalFare,
      minFareApplied,
      currency: '',
      breakdown,
    };
  }

  // ─── Tarif par véhicule (liste pour estimation multi-véhicules) ──────────────

  async estimateAllVehicles(
    distanceKm: number,
    durationMin: number,
    eType?: string,
    bookingDate?: string,
  ): Promise<Array<{ vehicleType: VehicleType; fare: FareBreakdown }>> {
    const where: any = { eStatus: 'Active' };
    if (eType) where.eType = eType;

    const vehicles = await this.vehicleTypeRepo.find({ where });
    const results: Array<{ vehicleType: VehicleType; fare: FareBreakdown }> = [];

    for (const vehicle of vehicles) {
      const fareResult = await this.estimate({
        vehicleTypeId: vehicle.iVehicleTypeId,
        distanceKm,
        durationMin,
        eType: eType as any,
        bookingDate,
      });
      results.push({ vehicleType: vehicle, fare: fareResult });
    }

    return results;
  }

  // ─── Calcul du Surge Pricing ─────────────────────────────────────────────────

  private getSurge(
    vehicle: VehicleType,
    date: Date,
  ): { multiplier: number; type: 'None' | 'PickUp' | 'Night'; label?: string } {
    const timeStr = date.toTimeString().substring(0, 8); // HH:MM:SS
    const dayMap = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = dayMap[date.getDay()];

    // Surge nuit (priorité sur pickup si les deux actifs)
    if (vehicle.eNightStatus === 'Active') {
      if (this.isTimeInRange(timeStr, vehicle.tNightStartTime, vehicle.tNightEndTime)) {
        return {
          multiplier: vehicle.fNightPrice,
          type: 'Night',
          label: `From ${vehicle.tNightStartTime} To ${vehicle.tNightEndTime}`,
        };
      }
    }

    // Surge pickup par jour de la semaine
    if (vehicle.ePickStatus === 'Active') {
      const dayPriceMap: Record<string, { start: string; end: string; price: number }> = {
        Mon: { start: vehicle.tMonPickStartTime, end: vehicle.tMonPickEndTime, price: vehicle.fMonPickUpPrice },
        Tue: { start: vehicle.tTuePickStartTime, end: vehicle.tTuePickEndTime, price: vehicle.fTuePickUpPrice },
        Wed: { start: vehicle.tWedPickStartTime, end: vehicle.tWedPickEndTime, price: vehicle.fWedPickUpPrice },
        Thu: { start: vehicle.tThuPickStartTime, end: vehicle.tThuPickEndTime, price: vehicle.fThuPickUpPrice },
        Fri: { start: vehicle.tFriPickStartTime, end: vehicle.tFriPickEndTime, price: vehicle.fFriPickUpPrice },
        Sat: { start: vehicle.tSatPickStartTime, end: vehicle.tSatPickEndTime, price: vehicle.fSatPickUpPrice },
        Sun: { start: vehicle.tSunPickStartTime, end: vehicle.tSunPickEndTime, price: vehicle.fSunPickUpPrice },
      };

      const dayData = dayPriceMap[day];
      if (dayData && this.isTimeInRange(timeStr, dayData.start, dayData.end)) {
        return {
          multiplier: dayData.price,
          type: 'PickUp',
          label: `${dayData.start} To ${dayData.end}`,
        };
      }

      // Fallback surge pickup général
      if (this.isTimeInRange(timeStr, vehicle.tPickStartTime, vehicle.tPickEndTime)) {
        return {
          multiplier: vehicle.fPickUpPrice,
          type: 'PickUp',
          label: `${vehicle.tPickStartTime} To ${vehicle.tPickEndTime}`,
        };
      }
    }

    return { multiplier: 1, type: 'None' };
  }

  private isTimeInRange(current: string, start: string, end: string): boolean {
    if (!start || !end) return false;
    if (start <= end) {
      return current >= start && current <= end;
    }
    // Cas minuit : ex. 22:00 → 02:00
    return current >= start || current <= end;
  }

  // ─── Application du code promo ───────────────────────────────────────────────

  private async applyPromo(code: string, subtotal: number, userId?: number): Promise<number> {
    try {
      const coupon = await this.couponRepo
        .createQueryBuilder('c')
        .where('c.vCouponCode = :code', { code })
        .andWhere('c.eStatus = :status', { status: 'Active' })
        .getOne();

      if (!coupon) return 0;

      // Vérifier validité de date (si les champs existent)
      const now = new Date();
      if ((coupon as any).dStartDate && new Date((coupon as any).dStartDate) > now) return 0;
      if ((coupon as any).dEndDate && new Date((coupon as any).dEndDate) < now) return 0;

      // Calculer la remise
      if ((coupon as any).eDiscountType === 'Percentage') {
        const pct = Math.min((coupon as any).fDiscount || 0, 100);
        const maxDiscount = (coupon as any).fMaxDiscount || Infinity;
        return Math.min((subtotal * pct) / 100, maxDiscount);
      } else {
        // Fixed discount
        return Math.min((coupon as any).fDiscount || 0, subtotal);
      }
    } catch {
      return 0;
    }
  }

  // ─── Construction du détail lisible ─────────────────────────────────────────

  private buildBreakdown(vehicle: VehicleType, data: any): Array<{ label: string; value: string }> {
    const lines: Array<{ label: string; value: string }> = [];
    const fmt = (v: number) => v.toFixed(2);

    if (vehicle.eFareType === 'Fixed') {
      lines.push({ label: 'Fixed Fare', value: fmt(data.baseFare) });
    } else if (vehicle.eFareType === 'Hourly') {
      lines.push({ label: 'Hourly Fare', value: fmt(data.baseFare) });
    } else {
      if (data.baseFare > 0) lines.push({ label: 'Base Fare', value: fmt(data.baseFare) });
      if (data.distanceFare > 0) lines.push({ label: `Distance (${data.distance} km)`, value: fmt(data.distanceFare) });
      if (data.timeFare > 0) lines.push({ label: `Time (${data.duration} min)`, value: fmt(data.timeFare) });
    }

    if (data.surge.type !== 'None') {
      lines.push({ label: `Surge (${data.surge.type})`, value: `x${data.surge.multiplier}` });
    }

    if (data.minFareApplied) {
      lines.push({ label: 'Minimum Fare Applied', value: fmt(vehicle.iMinFare) });
    }

    lines.push({ label: 'Subtotal', value: fmt(data.subtotal) });

    if (data.discount > 0) {
      lines.push({ label: 'Promo Discount', value: `-${fmt(data.discount)}` });
    }

    lines.push({ label: 'Total Fare', value: fmt(data.totalFare) });

    return lines;
  }
}
