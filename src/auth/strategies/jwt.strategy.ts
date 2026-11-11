import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthUser, JwtPayload } from '../auth.types';
import { resolveJwtSecret } from '../jwt-secret';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: resolveJwtSecret(config),
    });
  }

  validate(payload: JwtPayload): AuthUser {
    if (!payload.sub) throw new UnauthorizedException();
    return {
      id: payload.sub,
      email: payload.email,
      userType: payload.userType,
      groupId: payload.groupId,
    };
  }
}
