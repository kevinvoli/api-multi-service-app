import { Module } from '@nestjs/common';
import { IdproofImagesService } from './idproof-images.service';
import { IdproofImagesController } from './idproof-images.controller';

@Module({
  controllers: [IdproofImagesController],
  providers: [IdproofImagesService],
})
export class IdproofImagesModule {}
