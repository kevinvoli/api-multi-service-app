import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { FareService } from './fare.service';
import { EstimateFareDto } from './dto/estimate-fare.dto';

@Controller('fare')
export class FareController {
  constructor(private readonly fareService: FareService) {}

  /**
   * POST /fare/estimate
   * Estimation du tarif pour un trajet donné (un véhicule)
   * Remplace : ajax_estimate_by_vehicle_type.php
   */
  @Post('estimate')
  estimate(@Body() dto: EstimateFareDto) {
    return this.fareService.estimate(dto);
  }

  /**
   * GET /fare/estimate-all?distanceKm=5&durationMin=15&eType=Ride&bookingDate=...
   * Estimation pour tous les types de véhicules disponibles
   */
  @Get('estimate-all')
  estimateAll(
    @Query('distanceKm') distanceKm: string,
    @Query('durationMin') durationMin: string,
    @Query('eType') eType?: string,
    @Query('bookingDate') bookingDate?: string,
  ) {
    return this.fareService.estimateAllVehicles(
      parseFloat(distanceKm),
      parseFloat(durationMin),
      eType,
      bookingDate,
    );
  }
}
