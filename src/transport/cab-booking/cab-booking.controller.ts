import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CabBookingService } from './cab-booking.service';
import { CreateCabBookingDto } from './dto/create-cab-booking.dto';
import { UpdateCabBookingDto } from './dto/update-cab-booking.dto';

@Controller('bookings')
export class CabBookingController {
  constructor(private readonly cabBookingService: CabBookingService) {}

  /** POST /bookings — Créer une réservation (Manuel Dispatch) */
  @Post()
  create(@Body() dto: CreateCabBookingDto) {
    return this.cabBookingService.create(dto);
  }

  /** GET /bookings?companyId=&status=&driverId= — Liste avec filtres */
  @Get()
  findAll(
    @Query('companyId') companyId?: string,
    @Query('status') status?: string,
    @Query('driverId') driverId?: string,
  ) {
    return this.cabBookingService.findAll({
      companyId: companyId ? +companyId : undefined,
      status,
      driverId: driverId ? +driverId : undefined,
    });
  }

  /** GET /bookings/:id — Détail d'une réservation */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cabBookingService.findOne(+id);
  }

  /** PATCH /bookings/:id/assign-driver — Assigner un chauffeur */
  @Patch(':id/assign-driver')
  assignDriver(@Param('id') id: string, @Body('driverId') driverId: number) {
    return this.cabBookingService.assignDriver(+id, driverId);
  }

  /** PATCH /bookings/:id/cancel — Annuler une réservation */
  @Patch(':id/cancel')
  cancel(@Param('id') id: string, @Body('cancelBy') cancelBy: 'Driver' | 'Rider' | 'Admin') {
    return this.cabBookingService.cancel(+id, cancelBy || 'Admin');
  }

  /** GET /bookings/drivers?companyId= — Liste chauffeurs par compagnie */
  @Get('drivers/by-company')
  findDriversByCompany(@Query('companyId') companyId: string) {
    return this.cabBookingService.findDriversByCompany(+companyId);
  }

  /** GET /bookings/riders/search?phone= — Chercher passager par téléphone */
  @Get('riders/search')
  findRiderByPhone(@Query('phone') phone: string) {
    return this.cabBookingService.findRiderByPhone(phone);
  }

  /** PATCH /bookings/:id — Mettre à jour une réservation */
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCabBookingDto) {
    return this.cabBookingService.update(+id, dto);
  }

  /** DELETE /bookings/:id */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cabBookingService.remove(+id);
  }
}
