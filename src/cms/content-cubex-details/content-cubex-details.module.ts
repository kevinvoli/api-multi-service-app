import { Module } from '@nestjs/common';
import { ContentCubexDetailsService } from './content-cubex-details.service';
import { ContentCubexDetailsController } from './content-cubex-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentCubexDetails } from './entities/content-cubex-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContentCubexDetails])],
  controllers: [ContentCubexDetailsController],
  providers: [ContentCubexDetailsService],
})
export class ContentCubexDetailsModule {}
