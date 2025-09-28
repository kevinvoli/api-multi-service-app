import { Module } from '@nestjs/common';
import { PrescriptionImagesService } from './prescription-images.service';
import { PrescriptionImagesController } from './prescription-images.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrescriptionImages } from './entities/prescription-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PrescriptionImages])],
  controllers: [PrescriptionImagesController],
  providers: [PrescriptionImagesService],
})
export class PrescriptionImagesModule {}
