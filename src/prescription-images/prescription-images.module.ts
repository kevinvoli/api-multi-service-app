import { Module } from '@nestjs/common';
import { PrescriptionImagesService } from './prescription-images.service';
import { PrescriptionImagesController } from './prescription-images.controller';

@Module({
  controllers: [PrescriptionImagesController],
  providers: [PrescriptionImagesService],
})
export class PrescriptionImagesModule {}
