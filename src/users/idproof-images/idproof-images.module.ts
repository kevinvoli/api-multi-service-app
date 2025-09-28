import { Module } from '@nestjs/common';
import { IdproofImagesService } from './idproof-images.service';
import { IdproofImagesController } from './idproof-images.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdproofImages } from './entities/idproof-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IdproofImages])],
  controllers: [IdproofImagesController],
  providers: [IdproofImagesService],
})
export class IdproofImagesModule {}
