import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfileService } from './user-profile.service';
import { UserProfileController } from './user-profile.controller';
import { RegisterUser } from '../register-user/entities/register-user.entity';
import { RegisterDriver } from '../register-driver/entities/register-driver.entity';
import { Company } from '../company/entities/company.entity';
import { UserAddress } from '../user-address/entities/user-address.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([RegisterUser, RegisterDriver, Company, UserAddress]),
  ],
  controllers: [UserProfileController],
  providers: [UserProfileService],
  exports: [UserProfileService],
})
export class UserProfileModule {}
