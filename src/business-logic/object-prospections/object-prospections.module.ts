import { Module } from '@nestjs/common';
import { ObjectProspections } from './entities/object-prospection.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjectProspectionsService } from './object-prospections.service';
import { ObjectProspectionsController } from './object-prospections.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ObjectProspections])],
  controllers: [ObjectProspectionsController],
  providers: [ObjectProspectionsService],
  exports: [TypeOrmModule.forFeature([ObjectProspections])],
})
export class ObjectProspectionsModule {}
