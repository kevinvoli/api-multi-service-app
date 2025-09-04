import { Module } from '@nestjs/common';
import { ObjectRealisationService } from './object-realisation.service';
import { ObjectRealisationController } from './object-realisation.controller';

@Module({
  controllers: [ObjectRealisationController],
  providers: [ObjectRealisationService],
})
export class ObjectRealisationModule {}
