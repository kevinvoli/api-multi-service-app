import { Body, Controller, Get, Post, Query, UsePipes } from '@nestjs/common';
import { FareService } from './fare.service';
import {
  EstimateAllFaresQueryDto,
  EstimateFareDto,
} from './dto/estimate-fare.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { ALL_ROLES } from '../auth/auth.types';
import { StrictValidationPipe } from '../common/pipes/strict-validation.pipe';

@Controller('fare')
@Roles(...ALL_ROLES)
@UsePipes(StrictValidationPipe)
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
  estimateAll(@Query() query: EstimateAllFaresQueryDto) {
    return this.fareService.estimateAllVehicles(
      query.distanceKm,
      query.durationMin,
      query.eType,
      query.bookingDate,
    );
  }
}
