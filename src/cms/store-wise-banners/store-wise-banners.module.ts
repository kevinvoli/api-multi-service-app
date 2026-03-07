import { Module } from '@nestjs/common';
import { StoreWiseBanners } from './entities/store-wise-banner.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreWiseBannersService } from './store-wise-banners.service';
import { StoreWiseBannersController } from './store-wise-banners.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StoreWiseBanners])],
  controllers: [StoreWiseBannersController],
  providers: [StoreWiseBannersService],
  exports: [TypeOrmModule.forFeature([StoreWiseBanners])],
})
export class StoreWiseBannersModule {}
