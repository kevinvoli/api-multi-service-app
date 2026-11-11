import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule, JwtSignOptions } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { resolveJwtSecret } from './jwt-secret';
import { JwtStrategy } from './strategies/jwt.strategy';
import { RegisterUser } from '../users/register-user/entities/register-user.entity';
import { RegisterDriver } from '../users/register-driver/entities/register-driver.entity';
import { Company } from '../users/company/entities/company.entity';
import { Administrators } from '../administration/administrators/entities/administrator.entity';
import { MemberLog } from '../users/member-logs/entities/member-log.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: resolveJwtSecret(config),
        signOptions: {
          expiresIn: (config.get<string>('JWT_EXPIRES_IN') ||
            '7d') as JwtSignOptions['expiresIn'],
        },
      }),
    }),
    // Aucune limite globale : le ThrottlerGuard n'est appliqué que par @RateLimit() sur les routes publiques sensibles
    ThrottlerModule.forRoot([{ ttl: 60_000, limit: 60 }]),
    TypeOrmModule.forFeature([
      RegisterUser,
      RegisterDriver,
      Company,
      Administrators,
      MemberLog,
    ]),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
  exports: [AuthService, JwtModule, PassportModule, ThrottlerModule],
})
export class AuthModule {}
