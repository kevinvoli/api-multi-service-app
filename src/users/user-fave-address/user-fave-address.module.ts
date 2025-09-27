import { Module } from '@nestjs/common';
import { UserFaveAddressService } from './user-fave-address.service';
import { UserFaveAddressController } from './user-fave-address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserFaveAddress } from './entities/user-fave-address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserFaveAddress])],
  controllers: [UserFaveAddressController],
  providers: [UserFaveAddressService],
})
export class UserFaveAddressModule {}
