import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjectProspectionsService } from './object-prospections.service';
import { ObjectProspectionsController } from './object-prospections.controller';
import { ObjectProspections } from './entities/object-prospection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ObjectProspections])],
  controllers: [ObjectProspectionsController],
  providers: [ObjectProspectionsService],
})
export class ObjectProspectionsModule {}