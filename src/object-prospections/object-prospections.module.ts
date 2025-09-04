import { Module } from '@nestjs/common';
import { ObjectProspectionsService } from './object-prospections.service';
import { ObjectProspectionsController } from './object-prospections.controller';

@Module({
  controllers: [ObjectProspectionsController],
  providers: [ObjectProspectionsService],
})
export class ObjectProspectionsModule {}
