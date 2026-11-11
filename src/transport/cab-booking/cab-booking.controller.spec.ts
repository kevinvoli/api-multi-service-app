import {
  ConflictException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { CabBookingController } from './cab-booking.controller';
import { CabBookingService } from './cab-booking.service';
import { CabBooking } from './entities/cab-booking.entity';
import { AssignDriverDto } from './dto/assign-driver.dto';
import { CancelCabBookingDto } from './dto/cancel-cab-booking.dto';
import { CreateCabBookingDto } from './dto/create-cab-booking.dto';
import { UpdateCabBookingDto } from './dto/update-cab-booking.dto';
import {
  DriversByCompanyQueryDto,
  ListBookingsQueryDto,
} from './dto/cab-booking-query.dto';
import { authUser } from '../../../test/factories/auth-user.factory';
import { ROLES_KEY } from '../../auth/decorators/roles.decorator';

const RIDER = authUser('rider', 10);
const OTHER_RIDER = authUser('rider', 11);
const COMPANY = authUser('company', 3);
const OTHER_COMPANY = authUser('company', 4);
const ADMIN = authUser('hotel', 1);

const BOOKING = {
  iCabBookingId: 100,
  iUserId: 10,
  iCompanyId: 3,
  iDriverId: 0,
  iTripId: 0,
  eStatus: 'Pending',
} as CabBooking;

describe('CabBookingController — contrôle d appartenance', () => {
  let controller: CabBookingController;
  let service: Record<keyof CabBookingService, jest.Mock>;

  beforeEach(() => {
    service = {
      create: jest.fn().mockResolvedValue(BOOKING),
      assignDriver: jest.fn().mockResolvedValue(BOOKING),
      findDriver: jest.fn().mockResolvedValue({ iDriverId: 5 }),
      findDriversByCompany: jest.fn().mockResolvedValue([]),
      findRiderByPhone: jest.fn().mockResolvedValue(null),
      findAll: jest.fn().mockResolvedValue([]),
      findOne: jest.fn().mockResolvedValue({ ...BOOKING }),
      update: jest.fn().mockResolvedValue(BOOKING),
      cancel: jest.fn().mockResolvedValue(BOOKING),
      remove: jest.fn().mockResolvedValue(undefined),
    } as unknown as Record<keyof CabBookingService, jest.Mock>;
    controller = new CabBookingController(
      service as unknown as CabBookingService,
    );
  });

  const rolesOf = (method: keyof CabBookingController): unknown =>
    Reflect.getMetadata(
      ROLES_KEY,
      Object.getOwnPropertyDescriptor(CabBookingController.prototype, method)
        ?.value as object,
    );

  describe('politique de rôles', () => {
    it('la classe est ouverte aux rider et company', () => {
      expect(Reflect.getMetadata(ROLES_KEY, CabBookingController)).toEqual([
        'rider',
        'company',
      ]);
    });

    it.each(['assignDriver', 'remove', 'findDriversByCompany'] as const)(
      '%s est réservé à company (et admin)',
      (method) => {
        expect(rolesOf(method)).toEqual(['company']);
      },
    );
  });

  describe('create', () => {
    it('un rider ne peut pas affecter de chauffeur', async () => {
      const dto = { iDriverId: 5 } as CreateCabBookingDto;
      await expect(controller.create(dto, RIDER)).rejects.toThrow(
        ForbiddenException,
      );
      expect(service.create).not.toHaveBeenCalled();
    });

    it('un rider ne peut pas créer pour un autre rider', async () => {
      const dto = { iUserId: 11 } as CreateCabBookingDto;
      await expect(controller.create(dto, RIDER)).rejects.toThrow(
        ForbiddenException,
      );
      expect(service.create).not.toHaveBeenCalled();
    });

    it('un rider se voit attribuer la réservation par défaut', async () => {
      const dto = {} as CreateCabBookingDto;
      await controller.create(dto, RIDER);
      expect(service.create).toHaveBeenCalledWith(
        expect.objectContaining({ iUserId: 10 }),
      );
    });

    it('une company ne peut pas créer pour une autre company', async () => {
      const dto = { iCompanyId: 4 } as CreateCabBookingDto;
      await expect(controller.create(dto, COMPANY)).rejects.toThrow(
        ForbiddenException,
      );
      expect(service.create).not.toHaveBeenCalled();
    });

    it('une company se voit attribuer la réservation par défaut', async () => {
      const dto = {} as CreateCabBookingDto;
      await controller.create(dto, COMPANY);
      expect(service.create).toHaveBeenCalledWith(
        expect.objectContaining({ iCompanyId: 3 }),
      );
    });

    it('une company vérifie que le chauffeur lui appartient', async () => {
      service.findDriver.mockRejectedValue(new ForbiddenException());
      const dto = { iDriverId: 5 } as CreateCabBookingDto;

      await expect(controller.create(dto, COMPANY)).rejects.toThrow(
        ForbiddenException,
      );
      expect(service.findDriver).toHaveBeenCalledWith(5, 3);
      expect(service.create).not.toHaveBeenCalled();
    });

    it('une company crée avec un chauffeur de sa compagnie', async () => {
      const dto = { iDriverId: 5 } as CreateCabBookingDto;
      await controller.create(dto, COMPANY);
      expect(service.findDriver).toHaveBeenCalledWith(5, 3);
      expect(service.create).toHaveBeenCalledWith(dto);
    });

    it('l admin crée pour qui il veut, avec chauffeur, sans contrôle', async () => {
      const dto = {
        iUserId: 11,
        iCompanyId: 4,
        iDriverId: 5,
      } as CreateCabBookingDto;
      await controller.create(dto, ADMIN);
      expect(service.findDriver).not.toHaveBeenCalled();
      expect(service.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('findAll', () => {
    it('un rider est filtré sur ses propres réservations', () => {
      void controller.findAll({ companyId: 4 } as ListBookingsQueryDto, RIDER);
      expect(service.findAll).toHaveBeenCalledWith(
        expect.objectContaining({ userId: 10 }),
      );
    });

    it('une company est limitée à ses réservations', () => {
      void controller.findAll({} as ListBookingsQueryDto, COMPANY);
      expect(service.findAll).toHaveBeenCalledWith(
        expect.objectContaining({ companyId: 3, userId: undefined }),
      );
    });

    it('une company ne peut pas demander une autre compagnie', () => {
      expect(
        () =>
          void controller.findAll(
            { companyId: 4 } as ListBookingsQueryDto,
            COMPANY,
          ),
      ).toThrow(ForbiddenException);
      expect(service.findAll).not.toHaveBeenCalled();
    });

    it('l admin garde les filtres fournis, sans restriction', () => {
      void controller.findAll(
        { companyId: 4, status: 'Pending' } as ListBookingsQueryDto,
        ADMIN,
      );
      expect(service.findAll).toHaveBeenCalledWith({
        companyId: 4,
        status: 'Pending',
        driverId: undefined,
        userId: undefined,
      });
    });

    it('fait un seul appel au service (pas de N+1)', () => {
      void controller.findAll({} as ListBookingsQueryDto, RIDER);
      expect(service.findAll).toHaveBeenCalledTimes(1);
    });
  });

  describe('findDriversByCompany', () => {
    it('une company ne liste que ses chauffeurs', () => {
      const query = { companyId: 4 } as DriversByCompanyQueryDto;
      expect(() => controller.findDriversByCompany(query, COMPANY)).toThrow(
        ForbiddenException,
      );
      expect(service.findDriversByCompany).not.toHaveBeenCalled();
    });

    it('une company liste ses chauffeurs', async () => {
      await controller.findDriversByCompany(
        { companyId: 3 } as DriversByCompanyQueryDto,
        COMPANY,
      );
      expect(service.findDriversByCompany).toHaveBeenCalledWith(3);
    });
  });

  describe('findOne', () => {
    it('le rider propriétaire lit sa réservation', async () => {
      await expect(controller.findOne(100, RIDER)).resolves.toMatchObject({
        iCabBookingId: 100,
      });
    });

    it('la company propriétaire lit la réservation', async () => {
      await expect(controller.findOne(100, COMPANY)).resolves.toMatchObject({
        iCabBookingId: 100,
      });
    });

    it('un autre rider est refusé', async () => {
      await expect(controller.findOne(100, OTHER_RIDER)).rejects.toThrow(
        ForbiddenException,
      );
    });

    it('une autre company est refusée', async () => {
      await expect(controller.findOne(100, OTHER_COMPANY)).rejects.toThrow(
        ForbiddenException,
      );
    });

    it('une company dont l id égale celui du rider propriétaire est refusée', async () => {
      await expect(
        controller.findOne(100, authUser('company', 10)),
      ).rejects.toThrow(ForbiddenException);
    });

    it('l admin lit toute réservation', async () => {
      await expect(controller.findOne(100, ADMIN)).resolves.toBeDefined();
    });

    it('propage NotFound pour une réservation inexistante', async () => {
      service.findOne.mockRejectedValue(new NotFoundException());
      await expect(controller.findOne(999, RIDER)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('assignDriver', () => {
    const dto = { driverId: 5 } as AssignDriverDto;

    it('la company propriétaire affecte un chauffeur en passant son id pour le contrôle', async () => {
      await controller.assignDriver(100, dto, COMPANY);
      expect(service.assignDriver).toHaveBeenCalledWith(100, 5, 3);
    });

    it('une autre company est refusée', async () => {
      await expect(
        controller.assignDriver(100, dto, OTHER_COMPANY),
      ).rejects.toThrow(ForbiddenException);
      expect(service.assignDriver).not.toHaveBeenCalled();
    });

    it('l admin affecte sans restriction de compagnie', async () => {
      await controller.assignDriver(100, dto, ADMIN);
      expect(service.assignDriver).toHaveBeenCalledWith(100, 5, undefined);
    });
  });

  describe('cancel', () => {
    it('un rider propriétaire annule, étiqueté Rider quoi qu il envoie', async () => {
      await controller.cancel(
        100,
        { cancelBy: 'Admin' } as CancelCabBookingDto,
        RIDER,
      );
      expect(service.cancel).toHaveBeenCalledWith(100, 'Rider');
    });

    it('un autre rider est refusé', async () => {
      await expect(
        controller.cancel(100, {} as CancelCabBookingDto, OTHER_RIDER),
      ).rejects.toThrow(ForbiddenException);
      expect(service.cancel).not.toHaveBeenCalled();
    });

    it('l admin annule avec Admin par défaut', async () => {
      await controller.cancel(100, {} as CancelCabBookingDto, ADMIN);
      expect(service.cancel).toHaveBeenCalledWith(100, 'Admin');
    });

    it.each(['Accepted', 'Cancel', 'Completed'] as const)(
      'un non-admin reçoit 409 quand la réservation est au statut %s',
      async (eStatus) => {
        service.findOne.mockResolvedValue({ ...BOOKING, eStatus });
        await expect(
          controller.cancel(100, {} as CancelCabBookingDto, RIDER),
        ).rejects.toThrow(ConflictException);
        expect(service.cancel).not.toHaveBeenCalled();
      },
    );

    it('un non-admin reçoit 409 quand une course est déjà créée', async () => {
      service.findOne.mockResolvedValue({
        ...BOOKING,
        iTripId: 42,
        eStatus: 'Assign',
      });
      await expect(
        controller.cancel(100, {} as CancelCabBookingDto, COMPANY),
      ).rejects.toThrow(ConflictException);
      expect(service.cancel).not.toHaveBeenCalled();
    });

    it('l admin annule quel que soit le statut', async () => {
      service.findOne.mockResolvedValue({ ...BOOKING, eStatus: 'Completed' });
      await controller.cancel(100, {} as CancelCabBookingDto, ADMIN);
      expect(service.cancel).toHaveBeenCalledWith(100, 'Admin');
    });
  });

  describe('update', () => {
    it('le propriétaire modifie sans réaffecter', async () => {
      const dto = { iUserId: 10 } as UpdateCabBookingDto;
      await controller.update(100, dto, RIDER);
      expect(service.update).toHaveBeenCalledWith(100, dto);
    });

    it.each([
      ['iUserId', 11],
      ['iCompanyId', 4],
      ['iDriverId', 5],
    ] as const)(
      'un non-admin ne peut pas réaffecter %s',
      async (field, value) => {
        const dto = { [field]: value } as UpdateCabBookingDto;
        await expect(controller.update(100, dto, COMPANY)).rejects.toThrow(
          ForbiddenException,
        );
        expect(service.update).not.toHaveBeenCalled();
      },
    );

    it('un autre rider est refusé', async () => {
      await expect(
        controller.update(100, {} as UpdateCabBookingDto, OTHER_RIDER),
      ).rejects.toThrow(ForbiddenException);
    });

    it.each(['Accepted', 'Cancel', 'Completed'] as const)(
      'un non-admin reçoit 409 quand la réservation est au statut %s',
      async (eStatus) => {
        service.findOne.mockResolvedValue({ ...BOOKING, eStatus });
        await expect(
          controller.update(100, {} as UpdateCabBookingDto, RIDER),
        ).rejects.toThrow(ConflictException);
        expect(service.update).not.toHaveBeenCalled();
      },
    );

    it('un non-admin reçoit 409 quand une course est déjà créée', async () => {
      service.findOne.mockResolvedValue({
        ...BOOKING,
        iTripId: 42,
        eStatus: 'Assign',
      });
      await expect(
        controller.update(100, {} as UpdateCabBookingDto, COMPANY),
      ).rejects.toThrow(ConflictException);
      expect(service.update).not.toHaveBeenCalled();
    });

    it('l admin modifie quel que soit le statut', async () => {
      service.findOne.mockResolvedValue({ ...BOOKING, eStatus: 'Completed' });
      const dto = {} as UpdateCabBookingDto;
      await controller.update(100, dto, ADMIN);
      expect(service.update).toHaveBeenCalledWith(100, dto);
    });

    it('l admin peut réaffecter', async () => {
      const dto = { iUserId: 11, iDriverId: 5 } as UpdateCabBookingDto;
      await controller.update(100, dto, ADMIN);
      expect(service.update).toHaveBeenCalledWith(100, dto);
    });
  });

  describe('remove', () => {
    it('la company propriétaire supprime', async () => {
      await controller.remove(100, COMPANY);
      expect(service.remove).toHaveBeenCalledWith(100);
    });

    it('une autre company est refusée', async () => {
      await expect(controller.remove(100, OTHER_COMPANY)).rejects.toThrow(
        ForbiddenException,
      );
      expect(service.remove).not.toHaveBeenCalled();
    });
  });
});
