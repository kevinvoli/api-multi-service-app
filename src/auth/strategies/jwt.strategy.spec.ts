import { UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import { AuthUser, JwtPayload } from '../auth.types';

const configWith = (env: Record<string, string>): ConfigService =>
  ({ get: (key: string) => env[key] }) as unknown as ConfigService;

describe('JwtStrategy', () => {
  const strategy = new JwtStrategy(
    configWith({ JWT_SECRET: 'test-secret', NODE_ENV: 'test' }),
  );

  it('refuse de démarrer en production sans JWT_SECRET', () => {
    expect(
      () => new JwtStrategy(configWith({ NODE_ENV: 'production' })),
    ).toThrow('JWT_SECRET est requis en production');
  });

  it('transforme le payload en AuthUser avec groupId', () => {
    const payload: JwtPayload = {
      sub: 12,
      email: 'admin@amygo.test',
      userType: 'hotel',
      groupId: 3,
    };
    const expected: AuthUser = {
      id: 12,
      email: 'admin@amygo.test',
      userType: 'hotel',
      groupId: 3,
    };

    expect(strategy.validate(payload)).toEqual(expected);
  });

  it('laisse groupId indéfini pour un rider', () => {
    const result = strategy.validate({
      sub: 5,
      email: 'r@amygo.test',
      userType: 'rider',
    });
    expect(result.id).toBe(5);
    expect(result.userType).toBe('rider');
    expect(result.groupId).toBeUndefined();
  });

  it.each([0, undefined])('401 si sub vaut %s', (sub) => {
    expect(() =>
      strategy.validate({
        sub,
        email: 'x@y.z',
        userType: 'rider',
      } as unknown as JwtPayload),
    ).toThrow(UnauthorizedException);
  });
});
