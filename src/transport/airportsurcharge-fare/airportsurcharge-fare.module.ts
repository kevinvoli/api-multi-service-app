import { Module } from '@nestjs/common';
import { AirportsurchargeFare } from './entities/airportsurcharge-fare.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirportsurchargeFareService } from './airportsurcharge-fare.service';
import { AirportsurchargeFareController } from './airportsurcharge-fare.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AirportsurchargeFare])],
  controllers: [AirportsurchargeFareController],
  providers: [AirportsurchargeFareService],
  exports: [TypeOrmModule.forFeature([AirportsurchargeFare])],
})
export class AirportsurchargeFareModule {}
