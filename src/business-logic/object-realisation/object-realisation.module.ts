import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjectRealisationService } from './object-realisation.service';
import { ObjectRealisationController } from './object-realisation.controller';
import { ObjectRealisations } from './entities/object-realisation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ObjectRealisations])],
  controllers: [ObjectRealisationController],
  providers: [ObjectRealisationService],
})
export class ObjectRealisationModule {}