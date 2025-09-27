import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjectObjectifsService } from './object-objectifs.service';
import { ObjectObjectifsController } from './object-objectifs.controller';
import { ObjectObjectifs } from './entities/object-objectif.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ObjectObjectifs])],
  controllers: [ObjectObjectifsController],
  providers: [ObjectObjectifsService],
})
export class ObjectObjectifsModule {}