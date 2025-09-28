import { Module } from '@nestjs/common';
import { StoreWiseBannersService } from './store-wise-banners.service';
import { StoreWiseBannersController } from './store-wise-banners.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreWiseBanners } from './entities/store-wise-banner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StoreWiseBanners])],
  controllers: [StoreWiseBannersController],
  providers: [StoreWiseBannersService],
})
export class StoreWiseBannersModule {}
