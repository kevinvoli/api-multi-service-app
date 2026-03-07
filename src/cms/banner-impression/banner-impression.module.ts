import { Module } from '@nestjs/common';
import { BannerImpression } from './entities/banner-impression.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerImpressionService } from './banner-impression.service';
import { BannerImpressionController } from './banner-impression.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BannerImpression])],
  controllers: [BannerImpressionController],
  providers: [BannerImpressionService],
  exports: [TypeOrmModule.forFeature([BannerImpression])],
})
export class BannerImpressionModule {}
