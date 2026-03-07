import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { RegisterUser } from '../users/register-user/entities/register-user.entity';
import { RegisterDriver } from '../users/register-driver/entities/register-driver.entity';
import { Company } from '../users/company/entities/company.entity';
import { Administrators } from '../administration/administrators/entities/administrator.entity';
import { MemberLog } from '../users/member-logs/entities/member-log.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'amygo_secret_key',
      signOptions: { expiresIn: '7d' },
    }),
    TypeOrmModule.forFeature([
      RegisterUser,
      RegisterDriver,
      Company,
      Administrators,
      MemberLog,
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, JwtModule, PassportModule],
})
export class AuthModule {}
