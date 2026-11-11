import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolesGuard } from './roles.guard';
import { AuthUser, UserType } from '../auth.types';
import { authUser } from '../../../test/factories/auth-user.factory';
import { Public } from '../decorators/public.decorator';
import { Roles } from '../decorators/roles.decorator';

class PlainController {
  noDecorator() {}

  @Public()
  open() {}

  @Roles('driver')
  driverOnly() {}
}

@Roles('rider', 'company')
class RiderCompanyController {
  inherited() {}

  @Roles('driver')
  override() {}

  @Public()
  open() {}
}

const contextFor = (
  controller: new () => object,
  method: string,
  user?: AuthUser,
): ExecutionContext =>
  ({
    getHandler: () =>
      (controller.prototype as Record<string, () => void>)[method],
    getClass: () => controller,
    switchToHttp: () => ({ getRequest: () => ({ user }) }),
  }) as unknown as ExecutionContext;

describe('RolesGuard', () => {
  const guard = new RolesGuard(new Reflector());

  it('laisse passer une route @Public même sans utilisateur', () => {
    expect(guard.canActivate(contextFor(PlainController, 'open'))).toBe(true);
  });

  it('refuse quand aucun utilisateur n est attaché à la requête', () => {
    expect(
      guard.canActivate(contextFor(RiderCompanyController, 'inherited')),
    ).toBe(false);
  });

  it.each(['noDecorator', 'driverOnly'])(
    'laisse passer l admin (hotel) sur %s',
    (method) => {
      expect(
        guard.canActivate(
          contextFor(PlainController, method, authUser('hotel')),
        ),
      ).toBe(true);
    },
  );

  it.each<UserType>(['rider', 'driver', 'company'])(
    'fermé par défaut : %s refusé sans @Roles',
    (userType) => {
      expect(
        guard.canActivate(
          contextFor(PlainController, 'noDecorator', authUser(userType)),
        ),
      ).toBe(false);
    },
  );

  it('accepte un rôle listé par @Roles de la classe', () => {
    const ctx = (type: UserType) =>
      contextFor(RiderCompanyController, 'inherited', authUser(type));
    expect(guard.canActivate(ctx('rider'))).toBe(true);
    expect(guard.canActivate(ctx('company'))).toBe(true);
  });

  it('refuse un rôle non listé par @Roles de la classe', () => {
    expect(
      guard.canActivate(
        contextFor(RiderCompanyController, 'inherited', authUser('driver')),
      ),
    ).toBe(false);
  });

  it('le @Roles du handler remplace celui de la classe', () => {
    const ctx = (type: UserType) =>
      contextFor(RiderCompanyController, 'override', authUser(type));
    expect(guard.canActivate(ctx('driver'))).toBe(true);
    expect(guard.canActivate(ctx('rider'))).toBe(false);
    expect(guard.canActivate(ctx('company'))).toBe(false);
  });

  it('@Public du handler prime sur le @Roles de la classe', () => {
    expect(guard.canActivate(contextFor(RiderCompanyController, 'open'))).toBe(
      true,
    );
  });

  it('refuse un userType inconnu du jeton', () => {
    expect(
      guard.canActivate(
        contextFor(
          RiderCompanyController,
          'inherited',
          authUser('inconnu' as UserType),
        ),
      ),
    ).toBe(false);
  });
});
