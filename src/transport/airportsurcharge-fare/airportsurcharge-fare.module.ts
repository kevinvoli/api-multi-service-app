import { Module } from '@nestjs/common';
import { AirportsurchargeFareService } from './airportsurcharge-fare.service';
import { AirportsurchargeFareController } from './airportsurcharge-fare.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirportsurchargeFare } from './entities/airportsurcharge-fare.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AirportsurchargeFare])],
  controllers: [AirportsurchargeFareController],
  providers: [AirportsurchargeFareService],
})
export class AirportsurchargeFareModule {}
