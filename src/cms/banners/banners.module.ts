import { Module } from '@nestjs/common';
import { Banners } from './entities/banner.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannersService } from './banners.service';
import { BannersController } from './banners.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Banners])],
  controllers: [BannersController],
  providers: [BannersService],
  exports: [TypeOrmModule.forFeature([Banners])],
})
export class BannersModule {}
