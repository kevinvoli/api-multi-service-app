import { Controller, Get, Patch, Post, Param, Query, Body, ParseIntPipe, ParseFloatPipe } from '@nestjs/common';
import { GeoService } from './geo.service';

@Controller('geo')
export class GeoController {
  constructor(private readonly geoService: GeoService) {}

  /** PATCH /geo/driver/:id/position — Mise à jour GPS du chauffeur */
  @Patch('driver/:id/position')
  updateDriverPosition(
    @Param('id', ParseIntPipe) driverId: number,
    @Body('lat') lat: string,
    @Body('lon') lon: string,
  ) {
    return this.geoService.updateDriverPosition(driverId, lat, lon);
  }

  /** GET /geo/drivers/nearby?lat=&lon=&radiusKm=&vehicleTypeId=&companyId= */
  @Get('drivers/nearby')
  findNearbyDrivers(
    @Query('lat', ParseFloatPipe) lat: number,
    @Query('lon', ParseFloatPipe) lon: number,
    @Query('radiusKm') radiusKm?: string,
    @Query('vehicleTypeId') vehicleTypeId?: string,
    @Query('companyId') companyId?: string,
  ) {
    return this.geoService.findNearbyDrivers(
      lat,
      lon,
      radiusKm ? parseFloat(radiusKm) : 5,
      vehicleTypeId ? parseInt(vehicleTypeId, 10) : undefined,
      companyId ? parseInt(companyId, 10) : undefined,
    );
  }

  /** GET /geo/trip/:tripId — Détails trajet + chauffeur (remplace ajax_getdirver_detail.php) */
  @Get('trip/:tripId')
  getTripWithDriver(@Param('tripId', ParseIntPipe) tripId: number) {
    return this.geoService.getTripWithDriver(tripId);
  }

  /** POST /geo/distance — Calcul distance/durée entre deux points */
  @Post('distance')
  calculateDistance(
    @Body('originLat', ParseFloatPipe) originLat: number,
    @Body('originLon', ParseFloatPipe) originLon: number,
    @Body('destLat', ParseFloatPipe) destLat: number,
    @Body('destLon', ParseFloatPipe) destLon: number,
  ) {
    return this.geoService.calculateDistance(originLat, originLon, destLat, destLon);
  }
}
