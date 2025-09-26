import { Module } from '@nestjs/common';
import { AirportLocationMastersService } from './airport-location-masters.service';
import { AirportLocationMastersController } from './airport-location-masters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirportLocationMaster } from './entities/airport-location-master.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AirportLocationMaster])],
  controllers: [AirportLocationMastersController],
  providers: [AirportLocationMastersService],
})
export class AirportLocationMastersModule {}