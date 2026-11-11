import { Body, Controller, Get, Post, Query, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUser, ALL_ROLES } from './auth.types';
import { CurrentUser } from './decorators/current-user.decorator';
import { Public } from './decorators/public.decorator';
import { RateLimit } from './decorators/rate-limit.decorator';
import { Roles } from './decorators/roles.decorator';
import { CheckPhoneDto } from './dto/check-phone.dto';
import { LoginDto } from './dto/login.dto';
import { StrictValidationPipe } from '../common/pipes/strict-validation.pipe';

@Controller('auth')
@UsePipes(StrictValidationPipe)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * POST /auth/login
   * Login universel : rider, driver, company, hotel/admin
   * Remplace : ajax_login_action.php
   */
  @Public()
  @RateLimit(10, 60_000)
  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  /**
   * GET /auth/check-phone?phone=XXX&userType=rider|driver
   * Vérifie si un numéro de téléphone est déjà enregistré
   * Remplace : ajax_rider_mobile.php et ajax_driver_mobile.php
   * Retour : { exists: true/false }
   */
  @Public()
  @RateLimit(20, 60_000)
  @Get('check-phone')
  checkPhone(@Query() dto: CheckPhoneDto) {
    return this.authService.checkPhone(dto.phone, dto.userType);
  }

  /** GET /auth/me — Utilisateur du jeton */
  @Roles(...ALL_ROLES)
  @Get('me')
  me(@CurrentUser() user: AuthUser): AuthUser {
    return user;
  }
}
