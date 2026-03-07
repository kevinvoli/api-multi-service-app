import { Module } from '@nestjs/common';
import { ContentCubexDetails } from './entities/content-cubex-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentCubexDetailsService } from './content-cubex-details.service';
import { ContentCubexDetailsController } from './content-cubex-details.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContentCubexDetails])],
  controllers: [ContentCubexDetailsController],
  providers: [ContentCubexDetailsService],
  exports: [TypeOrmModule.forFeature([ContentCubexDetails])],
})
export class ContentCubexDetailsModule {}
