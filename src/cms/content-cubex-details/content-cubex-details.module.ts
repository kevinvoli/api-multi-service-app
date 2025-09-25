import { Module } from '@nestjs/common';
import { ContentCubexDetailsService } from './content-cubex-details.service';
import { ContentCubexDetailsController } from './content-cubex-details.controller';

@Module({
  controllers: [ContentCubexDetailsController],
  providers: [ContentCubexDetailsService],
})
export class ContentCubexDetailsModule {}
