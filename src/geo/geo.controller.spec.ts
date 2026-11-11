import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { GeoController } from './geo.controller';
import { GeoService, tripNotFoundMessage } from './geo.service';
import { NearbyDriversQueryDto, UpdateDriverPositionDto } from './dto/geo.dto';
import { authUser } from '../../test/factories/auth-user.factory';
import { ROLES_KEY } from '../auth/decorators/roles.decorator';

const handlerOf = (method: keyof GeoController): object =>
  Object.getOwnPropertyDescriptor(GeoController.prototype, method)
    ?.value as object;

const RIDER = authUser('rider', 10);
const DRIVER = authUser('driver', 10);
const COMPANY = authUser('company', 10);
const ADMIN = authUser('hotel', 1);

const tripOf = (iUserId: number, iDriverId: number) => ({
  trip: { iTripId: 77, iUserId, iDriverId },
  driver: null,
});

describe('GeoController — contrôle d appartenance', () => {
  let controller: GeoController;
  let service: Record<keyof GeoService, jest.Mock>;

  beforeEach(() => {
    service = {
      updateDriverPosition: jest.fn().mockResolvedValue({ ok: true }),
      findNearbyDrivers: jest.fn(),
      getTripWithDriver: jest.fn(),
      calculateDistance: jest.fn(),
    } as unknown as Record<keyof GeoService, jest.Mock>;
    controller = new GeoController(service as unknown as GeoService);
  });

  describe('PATCH driver/:id/position', () => {
    const dto = { lat: '5.3', lon: '-4.0' } as UpdateDriverPositionDto;

    it('est limité au rôle driver', () => {
      const handler = handlerOf('updateDriverPosition');
      expect(Reflect.getMetadata(ROLES_KEY, handler)).toEqual(['driver']);
    });

    it('un driver ne peut pas déplacer un autre driver', () => {
      expect(() => controller.updateDriverPosition(11, dto, DRIVER)).toThrow(
        ForbiddenException,
      );
      expect(service.updateDriverPosition).not.toHaveBeenCalled();
    });

    it('le jeton rider 10 ne passe pas pour le driver 10', () => {
      expect(() => controller.updateDriverPosition(10, dto, RIDER)).toThrow(
        ForbiddenException,
      );
      expect(service.updateDriverPosition).not.toHaveBeenCalled();
    });

    it('un driver met à jour sa propre position', async () => {
      await controller.updateDriverPosition(10, dto, DRIVER);
      expect(service.updateDriverPosition).toHaveBeenCalledWith(
        10,
        '5.3',
        '-4.0',
      );
    });

    it('l admin met à jour la position de n importe quel driver', async () => {
      await controller.updateDriverPosition(99, dto, ADMIN);
      expect(service.updateDriverPosition).toHaveBeenCalledWith(
        99,
        '5.3',
        '-4.0',
      );
    });
  });

  describe('GET trip/:tripId', () => {
    it('est limité aux rôles rider et driver', () => {
      const handler = handlerOf('getTripWithDriver');
      expect(Reflect.getMetadata(ROLES_KEY, handler)).toEqual([
        'rider',
        'driver',
      ]);
    });

    it('le rider de la course y accède', async () => {
      const result = tripOf(10, 55);
      service.getTripWithDriver.mockResolvedValue(result);
      await expect(controller.getTripWithDriver(77, RIDER)).resolves.toBe(
        result,
      );
    });

    it('le driver de la course y accède', async () => {
      const result = tripOf(55, 10);
      service.getTripWithDriver.mockResolvedValue(result);
      await expect(controller.getTripWithDriver(77, DRIVER)).resolves.toBe(
        result,
      );
    });

    it('un autre rider reçoit le même 404 que pour une course inconnue', async () => {
      service.getTripWithDriver.mockResolvedValue(tripOf(11, 55));
      const error: unknown = await controller
        .getTripWithDriver(77, RIDER)
        .catch((e: unknown) => e);
      expect(error).toBeInstanceOf(NotFoundException);
      expect((error as NotFoundException).message).toBe(
        tripNotFoundMessage(77),
      );
    });

    it('un rider ne passe pas en se faisant passer pour le numéro du driver', async () => {
      service.getTripWithDriver.mockResolvedValue(tripOf(11, 10));
      await expect(controller.getTripWithDriver(77, RIDER)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('un autre driver est refusé', async () => {
      service.getTripWithDriver.mockResolvedValue(tripOf(55, 11));
      await expect(controller.getTripWithDriver(77, DRIVER)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('l admin y accède', async () => {
      const result = tripOf(55, 56);
      service.getTripWithDriver.mockResolvedValue(result);
      await expect(controller.getTripWithDriver(77, ADMIN)).resolves.toBe(
        result,
      );
    });
  });

  describe('GET drivers/nearby', () => {
    const query = (radiusKm?: number): NearbyDriversQueryDto =>
      ({ lat: 5.3, lon: -4, radiusKm }) as NearbyDriversQueryDto;

    it('borne le rayon à 20 km pour un non-admin et masque le téléphone', () => {
      controller.findNearbyDrivers(query(500), RIDER);
      expect(service.findNearbyDrivers).toHaveBeenCalledWith(
        5.3,
        -4,
        20,
        undefined,
        undefined,
        false,
      );
    });

    it('conserve un rayon inférieur à la borne et applique 5 km par défaut', () => {
      controller.findNearbyDrivers(query(8), COMPANY);
      controller.findNearbyDrivers(query(), DRIVER);
      expect(service.findNearbyDrivers).toHaveBeenNthCalledWith(
        1,
        5.3,
        -4,
        8,
        undefined,
        undefined,
        false,
      );
      expect(service.findNearbyDrivers).toHaveBeenNthCalledWith(
        2,
        5.3,
        -4,
        5,
        undefined,
        undefined,
        false,
      );
    });

    it('ne borne pas le rayon de l admin et lui renvoie le téléphone', () => {
      controller.findNearbyDrivers(query(500), ADMIN);
      expect(service.findNearbyDrivers).toHaveBeenCalledWith(
        5.3,
        -4,
        500,
        undefined,
        undefined,
        true,
      );
    });
  });

  describe('routes ouvertes à tout utilisateur authentifié', () => {
    it.each(['findNearbyDrivers', 'calculateDistance'] as const)(
      '%s accepte rider, driver et company',
      (method) => {
        const handler = handlerOf(method);
        expect(Reflect.getMetadata(ROLES_KEY, handler)).toEqual([
          'rider',
          'driver',
          'company',
        ]);
      },
    );
  });
});
