import { Module } from '@nestjs/common';
import { ObjectObjectifsService } from './object-objectifs.service';
import { ObjectObjectifsController } from './object-objectifs.controller';

@Module({
  controllers: [ObjectObjectifsController],
  providers: [ObjectObjectifsService],
})
export class ObjectObjectifsModule {}
