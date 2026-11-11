import {
  ConflictException,
  Controller,
  ForbiddenException,
  Get,
  Post,
  Body,
  Patch,
  Param,
  ParseIntPipe,
  Delete,
  Query,
  UsePipes,
} from '@nestjs/common';
import { CabBookingService, isBookingModifiable } from './cab-booking.service';
import { CabBooking } from './entities/cab-booking.entity';
import { CreateCabBookingDto } from './dto/create-cab-booking.dto';
import { UpdateCabBookingDto } from './dto/update-cab-booking.dto';
import { AssignDriverDto } from './dto/assign-driver.dto';
import { CancelCabBookingDto } from './dto/cancel-cab-booking.dto';
import {
  DriversByCompanyQueryDto,
  ListBookingsQueryDto,
  SearchRiderQueryDto,
} from './dto/cab-booking-query.dto';
import { AuthUser } from '../../auth/auth.types';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { RateLimit } from '../../auth/decorators/rate-limit.decorator';
import { Roles } from '../../auth/decorators/roles.decorator';
import { assertOwner, assertSelf, isAdmin } from '../../auth/ownership';
import { StrictValidationPipe } from '../../common/pipes/strict-validation.pipe';

@Controller('bookings')
@Roles('rider', 'company')
@UsePipes(StrictValidationPipe)
export class CabBookingController {
  constructor(private readonly cabBookingService: CabBookingService) {}

  /** Charge la réservation puis vérifie que l'utilisateur en est le rider ou la compagnie. */
  private async loadOwned(id: number, user: AuthUser): Promise<CabBooking> {
    const booking = await this.cabBookingService.findOne(id);
    assertOwner(user, { rider: booking.iUserId, company: booking.iCompanyId });
    return booking;
  }

  /** POST /bookings — Créer une réservation (Manuel Dispatch) */
  @Post()
  async create(
    @Body() dto: CreateCabBookingDto,
    @CurrentUser() user: AuthUser,
  ) {
    if (!isAdmin(user)) {
      if (user.userType === 'rider') {
        dto.iUserId ??= user.id;
        // L'affectation d'un chauffeur est réservée à la compagnie et à l'admin
        if (dto.iDriverId) throw new ForbiddenException('Accès refusé');
      } else {
        dto.iCompanyId ??= user.id;
        if (dto.iDriverId) {
          await this.cabBookingService.findDriver(dto.iDriverId, user.id);
        }
      }
      assertOwner(user, { rider: dto.iUserId, company: dto.iCompanyId });
    }
    return this.cabBookingService.create(dto);
  }

  /** GET /bookings?companyId=&status=&driverId= — Liste avec filtres */
  @Get()
  findAll(@Query() query: ListBookingsQueryDto, @CurrentUser() user: AuthUser) {
    const filters = {
      companyId: query.companyId,
      status: query.status,
      driverId: query.driverId,
      userId: undefined as number | undefined,
    };
    if (!isAdmin(user)) {
      if (user.userType === 'rider') {
        filters.userId = user.id;
      } else {
        if (query.companyId !== undefined) {
          assertSelf(user, query.companyId, 'company');
        }
        filters.companyId = user.id;
      }
    }
    return this.cabBookingService.findAll(filters);
  }

  /** GET /bookings/drivers/by-company?companyId= — Liste chauffeurs par compagnie */
  @Roles('company')
  @Get('drivers/by-company')
  findDriversByCompany(
    @Query() query: DriversByCompanyQueryDto,
    @CurrentUser() user: AuthUser,
  ) {
    assertSelf(user, query.companyId, 'company');
    return this.cabBookingService.findDriversByCompany(query.companyId);
  }

  /** GET /bookings/riders/search?phone= — Chercher passager par téléphone */
  @Roles('company')
  @RateLimit(10, 60_000)
  @Get('riders/search')
  findRiderByPhone(@Query() query: SearchRiderQueryDto) {
    return this.cabBookingService.findRiderByPhone(query.phone);
  }

  /** GET /bookings/:id — Détail d'une réservation */
  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @CurrentUser() user: AuthUser,
  ) {
    return this.loadOwned(id, user);
  }

  /** PATCH /bookings/:id/assign-driver — Assigner un chauffeur */
  @Roles('company')
  @Patch(':id/assign-driver')
  async assignDriver(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: AssignDriverDto,
    @CurrentUser() user: AuthUser,
  ) {
    await this.loadOwned(id, user);
    return this.cabBookingService.assignDriver(
      id,
      dto.driverId,
      isAdmin(user) ? undefined : user.id,
    );
  }

  /** PATCH /bookings/:id/cancel — Annuler une réservation */
  @Patch(':id/cancel')
  async cancel(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CancelCabBookingDto,
    @CurrentUser() user: AuthUser,
  ) {
    const booking = await this.loadOwned(id, user);
    if (!isAdmin(user) && !isBookingModifiable(booking)) {
      throw new ConflictException(
        'Réservation non annulable : course déjà créée ou statut avancé',
      );
    }
    const cancelBy =
      !isAdmin(user) && user.userType === 'rider'
        ? 'Rider'
        : dto.cancelBy || 'Admin';
    return this.cabBookingService.cancel(id, cancelBy);
  }

  /** PATCH /bookings/:id — Mettre à jour une réservation */
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCabBookingDto,
    @CurrentUser() user: AuthUser,
  ) {
    const booking = await this.loadOwned(id, user);
    if (!isAdmin(user)) {
      const reassigned = (['iUserId', 'iCompanyId', 'iDriverId'] as const).some(
        (field) => dto[field] !== undefined && dto[field] !== booking[field],
      );
      if (reassigned) {
        throw new ForbiddenException(
          'Réaffectation du propriétaire ou du chauffeur interdite',
        );
      }
      if (!isBookingModifiable(booking)) {
        throw new ConflictException(
          'Réservation non modifiable : course déjà créée ou statut avancé',
        );
      }
    }
    return this.cabBookingService.update(id, dto);
  }

  /** DELETE /bookings/:id */
  @Roles('company')
  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @CurrentUser() user: AuthUser,
  ) {
    await this.loadOwned(id, user);
    return this.cabBookingService.remove(id);
  }
}
