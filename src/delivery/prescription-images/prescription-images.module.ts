import { Module } from '@nestjs/common';
import { PrescriptionImages } from './entities/prescription-image.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrescriptionImagesService } from './prescription-images.service';
import { PrescriptionImagesController } from './prescription-images.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PrescriptionImages])],
  controllers: [PrescriptionImagesController],
  providers: [PrescriptionImagesService],
  exports: [TypeOrmModule.forFeature([PrescriptionImages])],
})
export class PrescriptionImagesModule {}
