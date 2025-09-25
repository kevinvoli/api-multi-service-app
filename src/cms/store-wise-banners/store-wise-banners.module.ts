import { Module } from '@nestjs/common';
import { StoreWiseBannersService } from './store-wise-banners.service';
import { StoreWiseBannersController } from './store-wise-banners.controller';

@Module({
  controllers: [StoreWiseBannersController],
  providers: [StoreWiseBannersService],
})
export class StoreWiseBannersModule {}
