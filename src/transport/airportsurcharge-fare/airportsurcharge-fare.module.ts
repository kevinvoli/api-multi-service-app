import { Module } from '@nestjs/common';
import { AirportsurchargeFareService } from './airportsurcharge-fare.service';
import { AirportsurchargeFareController } from './airportsurcharge-fare.controller';

@Module({
  controllers: [AirportsurchargeFareController],
  providers: [AirportsurchargeFareService],
})
export class AirportsurchargeFareModule {}
