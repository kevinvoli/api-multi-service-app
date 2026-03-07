import { Module } from '@nestjs/common';
import { IdproofImages } from './entities/idproof-image.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdproofImagesService } from './idproof-images.service';
import { IdproofImagesController } from './idproof-images.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IdproofImages])],
  controllers: [IdproofImagesController],
  providers: [IdproofImagesService],
  exports: [TypeOrmModule.forFeature([IdproofImages])],
})
export class IdproofImagesModule {}
