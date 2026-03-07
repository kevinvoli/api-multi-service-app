import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { GeoService } from './geo.service';
import { RegisterDriver } from '../users/register-driver/entities/register-driver.entity';
import { Trips } from '../transport/trips/entities/trip.entity';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function makeQb(getOneResult: any = null, getManyResult: any[] = []) {
  const qb: any = {
    where: jest.fn().mockReturnThis(),
    andWhere: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    leftJoinAndSelect: jest.fn().mockReturnThis(),
    getOne: jest.fn().mockResolvedValue(getOneResult),
    getMany: jest.fn().mockResolvedValue(getManyResult),
  };
  return qb;
}

describe('GeoService', () => {
  let service: GeoService;
  let driverRepo: any;
  let tripRepo: any;

  beforeEach(async () => {
    driverRepo = {
      update: jest.fn().mockResolvedValue({ affected: 1 }),
      createQueryBuilder: jest.fn(),
    };
    tripRepo = {
      createQueryBuilder: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GeoService,
        { provide: getRepositoryToken(RegisterDriver), useValue: driverRepo },
        { provide: getRepositoryToken(Trips), useValue: tripRepo },
      ],
    }).compile();

    service = module.get<GeoService>(GeoService);
  });

  // ─── updateDriverPosition ────────────────────────────────────────────────────

  describe('updateDriverPosition', () => {
    it('retourne { updated: true } si le driver existe', async () => {
      driverRepo.update.mockResolvedValue({ affected: 1 });
      const result = await service.updateDriverPosition(1, '48.8566', '2.3522');
      expect(result.updated).toBe(true);
      expect(driverRepo.update).toHaveBeenCalledWith(
        { iDriverId: 1 },
        { vLatitude: '48.8566', vLongitude: '2.3522' },
      );
    });

    it('retourne { updated: false } si le driver n\'existe pas', async () => {
      driverRepo.update.mockResolvedValue({ affected: 0 });
      const result = await service.updateDriverPosition(999, '0', '0');
      expect(result.updated).toBe(false);
    });
  });

  // ─── findNearbyDrivers ───────────────────────────────────────────────────────

  describe('findNearbyDrivers', () => {
    it('retourne les drivers dans le rayon, triés par distance', async () => {
      const drivers = [
        { iDriverId: 1, vName: 'Ali', vLastName: 'B', vPhone: '0700', vImage: '', vLatitude: '48.860', vLongitude: '2.352', vAvgRating: '4.5', iDriverVehicleId: '1' },
        { iDriverId: 2, vName: 'Bob', vLastName: 'C', vPhone: '0701', vImage: '', vLatitude: '48.900', vLongitude: '2.352', vAvgRating: '4.0', iDriverVehicleId: '2' },
        { iDriverId: 3, vName: 'Far', vLastName: 'D', vPhone: '0702', vImage: '', vLatitude: '51.500', vLongitude: '0.000', vAvgRating: '3.0', iDriverVehicleId: '3' }, // trop loin
      ];
      const qb = makeQb(null, drivers);
      qb.getMany = jest.fn().mockResolvedValue(drivers);
      driverRepo.createQueryBuilder.mockReturnValue(qb);

      // Centré sur Paris (48.8566, 2.3522), rayon 10 km
      const result = await service.findNearbyDrivers(48.8566, 2.3522, 10);

      expect(result.length).toBe(2); // Far est à ~337km
      expect(result[0].iDriverId).toBeDefined();
      expect(result[0].distanceKm).toBeLessThanOrEqual(10);
      // Tri par distance croissante
      expect(result[0].distanceKm).toBeLessThanOrEqual(result[1].distanceKm);
    });

    it('retourne un tableau vide si aucun driver actif', async () => {
      const qb = makeQb(null, []);
      qb.getMany = jest.fn().mockResolvedValue([]);
      driverRepo.createQueryBuilder.mockReturnValue(qb);

      const result = await service.findNearbyDrivers(48.8566, 2.3522, 5);
      expect(result).toEqual([]);
    });

    it('filtre les drivers avec des coordonnees invalides', async () => {
      const drivers = [
        { iDriverId: 1, vLatitude: 'invalid', vLongitude: '2.35', vName: 'X', vLastName: 'Y', vPhone: '', vImage: '', vAvgRating: '0', iDriverVehicleId: '1' },
      ];
      const qb = makeQb(null, drivers);
      qb.getMany = jest.fn().mockResolvedValue(drivers);
      driverRepo.createQueryBuilder.mockReturnValue(qb);

      const result = await service.findNearbyDrivers(48.8566, 2.3522, 5);
      expect(result).toEqual([]);
    });
  });

  // ─── getTripWithDriver ───────────────────────────────────────────────────────

  describe('getTripWithDriver', () => {
    it('retourne le trajet et le chauffeur si statut actif', async () => {
      const mockTrip = {
        iTripId: 42,
        iUserId: 1,
        iDriverId: 10,
        iCompanyId: 1,
        iActive: 'Active',
        tStartLat: '48.85', tStartLong: '2.35',
        tEndLat: '48.90', tEndLong: '2.40',
        tSaddress: 'Paris', tDaddress: 'Boulogne',
        iFare: 15, fDistance: 7, fDuration: 20,
        vTripPaymentMode: 'Cash',
        eType: 'Ride',
        tTripRequestDate: new Date(),
        iDriver: {
          iDriverId: 10, vName: 'Karim', vLastName: 'A',
          vPhone: '0700', vImage: '', vLatitude: '48.86', vLongitude: '2.35', vAvgRating: '4.8',
        },
      };

      const qb = {
        leftJoinAndSelect: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        andWhere: jest.fn().mockReturnThis(),
        getOne: jest.fn().mockResolvedValue(mockTrip),
      };
      tripRepo.createQueryBuilder.mockReturnValue(qb);

      const result = await service.getTripWithDriver(42);
      expect(result.trip.iTripId).toBe(42);
      expect(result.driver?.iDriverId).toBe(10);
      expect(result.driver?.vName).toBe('Karim');
    });

    it('leve une NotFoundException si le trajet est inconnu ou termine', async () => {
      const qb = {
        leftJoinAndSelect: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        andWhere: jest.fn().mockReturnThis(),
        getOne: jest.fn().mockResolvedValue(null),
      };
      tripRepo.createQueryBuilder.mockReturnValue(qb);

      await expect(service.getTripWithDriver(999)).rejects.toThrow(NotFoundException);
    });
  });

  // ─── calculateDistance ───────────────────────────────────────────────────────

  describe('calculateDistance', () => {
    it('utilise Haversine en fallback (sans cle Google Maps)', async () => {
      delete process.env.GOOGLE_MAPS_API_KEY;
      const result = await service.calculateDistance(48.8566, 2.3522, 48.9784, 2.3456);
      expect(result.source).toBe('haversine');
      expect(result.distanceKm).toBeGreaterThan(0);
      expect(result.estimatedMinutes).toBeGreaterThan(0);
    });

    it('calcule une distance Paris-Boulogne ~13km', async () => {
      delete process.env.GOOGLE_MAPS_API_KEY;
      const result = await service.calculateDistance(48.8566, 2.3522, 48.8350, 2.2430);
      expect(result.distanceKm).toBeGreaterThan(5);
      expect(result.distanceKm).toBeLessThan(20);
    });
  });
});
