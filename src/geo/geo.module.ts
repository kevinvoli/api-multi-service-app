import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeoService } from './geo.service';
import { GeoController } from './geo.controller';
import { RegisterDriver } from '../users/register-driver/entities/register-driver.entity';
import { Trips } from '../transport/trips/entities/trip.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegisterDriver, Trips])],
  controllers: [GeoController],
  providers: [GeoService],
  exports: [GeoService],
})
export class GeoModule {}
