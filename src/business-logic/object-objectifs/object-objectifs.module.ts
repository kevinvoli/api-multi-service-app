import { Module } from '@nestjs/common';
import { ObjectObjectifs } from './entities/object-objectif.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjectObjectifsService } from './object-objectifs.service';
import { ObjectObjectifsController } from './object-objectifs.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ObjectObjectifs])],
  controllers: [ObjectObjectifsController],
  providers: [ObjectObjectifsService],
  exports: [TypeOrmModule.forFeature([ObjectObjectifs])],
})
export class ObjectObjectifsModule {}
