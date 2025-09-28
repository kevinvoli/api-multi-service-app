import { Module } from '@nestjs/common';
import { BannerImpressionService } from './banner-impression.service';
import { BannerImpressionController } from './banner-impression.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerImpression } from './entities/banner-impression.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BannerImpression])],
  controllers: [BannerImpressionController],
  providers: [BannerImpressionService],
})
export class BannerImpressionModule {}
