import { ForbiddenException } from '@nestjs/common';
import { UserProfileController } from './user-profile.controller';
import { UserProfileService } from './user-profile.service';
import { AddAddressDto } from './dto/add-address.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { GetProfileQueryDto } from './dto/get-profile-query.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { VerifyPasswordDto } from './dto/verify-password.dto';
import { authUser } from '../../../test/factories/auth-user.factory';
import { ROLES_KEY } from '../../auth/decorators/roles.decorator';

const RIDER_A = authUser('rider', 10);
const DRIVER_10 = authUser('driver', 10);
const ADMIN = authUser('hotel', 1);
const OTHER_ID = 20;

describe('UserProfileController — contrôle d appartenance', () => {
  let controller: UserProfileController;
  let service: Record<keyof UserProfileService, jest.Mock>;

  beforeEach(() => {
    service = {
      getProfile: jest.fn().mockResolvedValue({ id: 1 }),
      updateProfile: jest.fn().mockResolvedValue({ ok: true }),
      changePassword: jest.fn().mockResolvedValue({ ok: true }),
      verifyPassword: jest.fn().mockResolvedValue({ valid: true }),
      addAddress: jest.fn().mockResolvedValue({ ok: true }),
      listAddresses: jest.fn().mockResolvedValue([]),
      removeAddress: jest.fn().mockResolvedValue({ ok: true }),
    } as unknown as Record<keyof UserProfileService, jest.Mock>;
    controller = new UserProfileController(
      service as unknown as UserProfileService,
    );
  });

  const expectNoServiceCall = () =>
    Object.values(service).forEach((fn) => expect(fn).not.toHaveBeenCalled());

  const query = (userType?: GetProfileQueryDto['userType']) =>
    ({ userType }) as GetProfileQueryDto;

  it('est ouvert aux rôles rider, driver et company au niveau de la classe', () => {
    expect(Reflect.getMetadata(ROLES_KEY, UserProfileController)).toEqual([
      'rider',
      'driver',
      'company',
    ]);
  });

  describe('getProfile', () => {
    it('refuse le profil d un autre', () => {
      expect(() =>
        controller.getProfile(OTHER_ID, query('rider'), RIDER_A),
      ).toThrow(ForbiddenException);
      expectNoServiceCall();
    });

    it('refuse le profil driver de même numéro quand le jeton est rider', () => {
      expect(() => controller.getProfile(10, query('driver'), RIDER_A)).toThrow(
        ForbiddenException,
      );
      expectNoServiceCall();
    });

    it('déduit le type du jeton quand userType est absent', async () => {
      await controller.getProfile(10, query(), DRIVER_10);
      expect(service.getProfile).toHaveBeenCalledWith(10, 'driver');
    });

    it('un rider lit son propre profil', async () => {
      await controller.getProfile(10, query('rider'), RIDER_A);
      expect(service.getProfile).toHaveBeenCalledWith(10, 'rider');
    });

    it('l admin lit n importe quel profil, rider par défaut', async () => {
      await controller.getProfile(OTHER_ID, query(), ADMIN);
      await controller.getProfile(OTHER_ID, query('company'), ADMIN);
      expect(service.getProfile).toHaveBeenNthCalledWith(1, OTHER_ID, 'rider');
      expect(service.getProfile).toHaveBeenNthCalledWith(
        2,
        OTHER_ID,
        'company',
      );
    });
  });

  describe('updateProfile', () => {
    it('refuse la modification du profil d un autre', () => {
      const dto = { iUserId: OTHER_ID, userType: 'rider' } as UpdateProfileDto;
      expect(() => controller.updateProfile(dto, RIDER_A)).toThrow(
        ForbiddenException,
      );
      expectNoServiceCall();
    });

    it('refuse un userType différent du jeton pour le même numéro', () => {
      const dto = { iUserId: 10, userType: 'driver' } as UpdateProfileDto;
      expect(() => controller.updateProfile(dto, RIDER_A)).toThrow(
        ForbiddenException,
      );
      expectNoServiceCall();
    });

    it('accepte la modification de son propre profil', async () => {
      const dto = { iUserId: 10, userType: 'rider' } as UpdateProfileDto;
      await controller.updateProfile(dto, RIDER_A);
      expect(service.updateProfile).toHaveBeenCalledWith(dto);
    });

    it('l admin peut modifier n importe quel profil', async () => {
      const dto = { iUserId: OTHER_ID, userType: 'driver' } as UpdateProfileDto;
      await controller.updateProfile(dto, ADMIN);
      expect(service.updateProfile).toHaveBeenCalledWith(dto);
    });
  });

  describe('changePassword', () => {
    it('refuse le changement de mot de passe d un autre', () => {
      const dto = { iUserId: OTHER_ID, userType: 'rider' } as ChangePasswordDto;
      expect(() => controller.changePassword(dto, RIDER_A)).toThrow(
        ForbiddenException,
      );
      expectNoServiceCall();
    });

    it('accepte son propre mot de passe', async () => {
      const dto = { iUserId: 10, userType: 'rider' } as ChangePasswordDto;
      await controller.changePassword(dto, RIDER_A);
      expect(service.changePassword).toHaveBeenCalledWith(dto);
    });

    it('un rider ne peut pas cibler userType admin', () => {
      const dto = { iUserId: 10, userType: 'admin' } as ChangePasswordDto;
      expect(() => controller.changePassword(dto, RIDER_A)).toThrow(
        ForbiddenException,
      );
      expectNoServiceCall();
    });

    it('l admin passe pour userType admin', async () => {
      const dto = { userType: 'admin' } as ChangePasswordDto;
      await controller.changePassword(dto, ADMIN);
      expect(service.changePassword).toHaveBeenCalledWith(dto);
    });
  });

  describe('verifyPassword', () => {
    it('refuse la vérification pour un autre', () => {
      const dto = {
        iUserId: OTHER_ID,
        userType: 'rider',
        password: 'x',
      } as VerifyPasswordDto;
      expect(() => controller.verifyPassword(dto, RIDER_A)).toThrow(
        ForbiddenException,
      );
      expectNoServiceCall();
    });

    it('vérifie son propre mot de passe', async () => {
      const dto = {
        iUserId: 10,
        userType: 'rider',
        password: 'secret',
      } as VerifyPasswordDto;
      await controller.verifyPassword(dto, RIDER_A);
      expect(service.verifyPassword).toHaveBeenCalledWith(
        10,
        'rider',
        'secret',
      );
    });
  });

  describe('adresses', () => {
    it('refuse d ajouter une adresse à un autre', () => {
      const dto = { iUserId: OTHER_ID } as AddAddressDto;
      expect(() => controller.addAddress(dto, RIDER_A)).toThrow(
        ForbiddenException,
      );
      expectNoServiceCall();
    });

    it('refuse de lister les adresses d un autre', () => {
      expect(() => controller.listAddresses(OTHER_ID, RIDER_A)).toThrow(
        ForbiddenException,
      );
      expectNoServiceCall();
    });

    it('refuse de supprimer l adresse d un autre', () => {
      expect(() => controller.removeAddress(OTHER_ID, 3, RIDER_A)).toThrow(
        ForbiddenException,
      );
      expectNoServiceCall();
    });

    it('refuse les adresses à un driver de même numéro que le rider ciblé', () => {
      expect(() => controller.listAddresses(10, DRIVER_10)).toThrow(
        ForbiddenException,
      );
      expectNoServiceCall();
    });

    it('un rider gère ses propres adresses', async () => {
      const dto = { iUserId: 10 } as AddAddressDto;
      await controller.addAddress(dto, RIDER_A);
      await controller.listAddresses(10, RIDER_A);
      await controller.removeAddress(10, 3, RIDER_A);

      expect(service.addAddress).toHaveBeenCalledWith(dto);
      expect(service.listAddresses).toHaveBeenCalledWith(10);
      expect(service.removeAddress).toHaveBeenCalledWith(10, 3);
    });

    it('l admin gère les adresses de n importe quel rider', async () => {
      await controller.listAddresses(OTHER_ID, ADMIN);
      await controller.removeAddress(OTHER_ID, 3, ADMIN);
      expect(service.listAddresses).toHaveBeenCalledWith(OTHER_ID);
      expect(service.removeAddress).toHaveBeenCalledWith(OTHER_ID, 3);
    });
  });
});
