import { AppController } from '../app.controller';
import { NotificationsController } from '../notifications/notifications.controller';
import { AuthController } from './auth.controller';
import { IS_PUBLIC_KEY } from './decorators/public.decorator';
import { ROLES_KEY } from './decorators/roles.decorator';

type Controller = { prototype: object };

const handlerOf = (controller: Controller, method: string): object =>
  (controller.prototype as Record<string, object>)[method];

const isPublic = (controller: Controller, method: string): unknown =>
  Reflect.getMetadata(IS_PUBLIC_KEY, handlerOf(controller, method));

const roles = (controller: Controller, method: string): unknown =>
  Reflect.getMetadata(ROLES_KEY, handlerOf(controller, method));

describe('Politique d accès des routes publiques et sensibles', () => {
  it.each<[string, Controller, string]>([
    ['GET /', AppController, 'getHello'],
    ['POST /auth/login', AuthController, 'login'],
    ['GET /auth/check-phone', AuthController, 'checkPhone'],
    ['POST /notifications/otp/send', NotificationsController, 'sendOtp'],
    ['POST /notifications/otp/verify', NotificationsController, 'verifyOtp'],
  ])('%s est publique', (_label, controller, method) => {
    expect(isPublic(controller, method)).toBe(true);
  });

  it('GET /auth/me n est pas publique et est ouverte aux trois rôles', () => {
    expect(isPublic(AuthController, 'me')).toBeUndefined();
    expect(roles(AuthController, 'me')).toEqual(['rider', 'driver', 'company']);
  });

  it.each(['sendPush', 'sendSms'])(
    'NotificationsController.%s reste réservée à l admin (ni @Public ni @Roles)',
    (method) => {
      expect(isPublic(NotificationsController, method)).toBeUndefined();
      expect(roles(NotificationsController, method)).toBeUndefined();
      expect(
        Reflect.getMetadata(ROLES_KEY, NotificationsController),
      ).toBeUndefined();
      expect(
        Reflect.getMetadata(IS_PUBLIC_KEY, NotificationsController),
      ).toBeUndefined();
    },
  );
});
