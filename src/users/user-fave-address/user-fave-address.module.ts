import { Module } from '@nestjs/common';
import { UserFaveAddressService } from './user-fave-address.service';
import { UserFaveAddressController } from './user-fave-address.controller';

@Module({
  controllers: [UserFaveAddressController],
  providers: [UserFaveAddressService],
})
export class UserFaveAddressModule {}
