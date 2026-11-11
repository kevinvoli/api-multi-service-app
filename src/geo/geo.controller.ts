import {
  Controller,
  Get,
  Patch,
  Post,
  Param,
  Query,
  Body,
  NotFoundException,
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';
import { GeoService, tripNotFoundMessage } from './geo.service';
import {
  CalculateDistanceDto,
  NearbyDriversQueryDto,
  UpdateDriverPositionDto,
} from './dto/geo.dto';
import { ALL_ROLES, AuthUser } from '../auth/auth.types';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { assertSelf, isAdmin } from '../auth/ownership';
import { StrictValidationPipe } from '../common/pipes/strict-validation.pipe';

const DEFAULT_RADIUS_KM = 5;
const MAX_RADIUS_KM = 20;

@Controller('geo')
@UsePipes(StrictValidationPipe)
export class GeoController {
  constructor(private readonly geoService: GeoService) {}

  /** PATCH /geo/driver/:id/position — Mise à jour GPS du chauffeur */
  @Roles('driver')
  @Patch('driver/:id/position')
  updateDriverPosition(
    @Param('id', ParseIntPipe) driverId: number,
    @Body() dto: UpdateDriverPositionDto,
    @CurrentUser() user: AuthUser,
  ) {
    assertSelf(user, driverId, 'driver');
    return this.geoService.updateDriverPosition(driverId, dto.lat, dto.lon);
  }

  /** GET /geo/drivers/nearby?lat=&lon=&radiusKm=&vehicleTypeId=&companyId= */
  @Roles(...ALL_ROLES)
  @Get('drivers/nearby')
  findNearbyDrivers(
    @Query() query: NearbyDriversQueryDto,
    @CurrentUser() user: AuthUser,
  ) {
    const admin = isAdmin(user);
    const requestedRadius = query.radiusKm || DEFAULT_RADIUS_KM;
    return this.geoService.findNearbyDrivers(
      query.lat,
      query.lon,
      admin ? requestedRadius : Math.min(requestedRadius, MAX_RADIUS_KM),
      query.vehicleTypeId,
      query.companyId,
      admin,
    );
  }

  /** GET /geo/trip/:tripId — Détails trajet + chauffeur (remplace ajax_getdirver_detail.php) */
  @Roles('rider', 'driver')
  @Get('trip/:tripId')
  async getTripWithDriver(
    @Param('tripId', ParseIntPipe) tripId: number,
    @CurrentUser() user: AuthUser,
  ) {
    const result = await this.geoService.getTripWithDriver(tripId);
    const isParticipant =
      (user.userType === 'rider' && user.id === result.trip.iUserId) ||
      (user.userType === 'driver' && user.id === result.trip.iDriverId);
    if (!isAdmin(user) && !isParticipant) {
      throw new NotFoundException(tripNotFoundMessage(tripId));
    }
    return result;
  }

  /** POST /geo/distance — Calcul distance/durée entre deux points */
  @Roles(...ALL_ROLES)
  @Post('distance')
  calculateDistance(@Body() dto: CalculateDistanceDto) {
    return this.geoService.calculateDistance(
      dto.originLat,
      dto.originLon,
      dto.destLat,
      dto.destLon,
    );
  }
}
