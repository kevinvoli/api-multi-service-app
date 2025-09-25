import { Module } from '@nestjs/common';
import { BannerImpressionService } from './banner-impression.service';
import { BannerImpressionController } from './banner-impression.controller';

@Module({
  controllers: [BannerImpressionController],
  providers: [BannerImpressionService],
})
export class BannerImpressionModule {}
