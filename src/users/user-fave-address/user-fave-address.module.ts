import { Module } from '@nestjs/common';
import { UserFaveAddress } from './entities/user-fave-address.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserFaveAddressService } from './user-fave-address.service';
import { UserFaveAddressController } from './user-fave-address.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserFaveAddress])],
  controllers: [UserFaveAddressController],
  providers: [UserFaveAddressService],
  exports: [TypeOrmModule.forFeature([UserFaveAddress])],
})
export class UserFaveAddressModule {}
