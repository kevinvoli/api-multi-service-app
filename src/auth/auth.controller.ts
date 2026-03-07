import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * POST /auth/login
   * Login universel : rider, driver, company, hotel/admin
   * Remplace : ajax_login_action.php
   */
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
  @Get('check-phone')
  checkPhone(
    @Query('phone') phone: string,
    @Query('userType') userType: 'rider' | 'driver',
  ) {
    return this.authService.checkPhone(phone, userType);
  }
}
