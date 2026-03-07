import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { AddAddressDto } from './dto/add-address.dto';

@Controller('profile')
export class UserProfileController {
  constructor(private readonly profileService: UserProfileService) {}

  /** GET /profile/:userId?userType=rider — Obtenir le profil */
  @Get(':userId')
  getProfile(
    @Param('userId') userId: string,
    @Query('userType') userType = 'rider',
  ) {
    return this.profileService.getProfile(+userId, userType);
  }

  /** PATCH /profile — Mettre à jour le profil (ajax_profile_rider_a.php action=all) */
  @Patch()
  updateProfile(@Body() dto: UpdateProfileDto) {
    return this.profileService.updateProfile(dto);
  }

  /** POST /profile/change-password — Changer le mot de passe (action=pass) */
  @Post('change-password')
  changePassword(@Body() dto: ChangePasswordDto) {
    return this.profileService.changePassword(dto);
  }

  /** POST /profile/verify-password — Vérifier le mot de passe (ajax_check_password_a.php) */
  @Post('verify-password')
  verifyPassword(
    @Body('iUserId') iUserId: number,
    @Body('userType') userType: string,
    @Body('password') password: string,
  ) {
    return this.profileService.verifyPassword(iUserId, userType, password);
  }

  /** GET /profile/:userId/addresses — Lister les adresses */
  @Get(':userId/addresses')
  listAddresses(@Param('userId') userId: string) {
    return this.profileService.listAddresses(+userId);
  }

  /** POST /profile/addresses — Ajouter une adresse (ajax_add_delivery_address.php) */
  @Post('addresses')
  addAddress(@Body() dto: AddAddressDto) {
    return this.profileService.addAddress(dto);
  }

  /** DELETE /profile/:userId/addresses/:addressId — Supprimer une adresse (soft delete) */
  @Delete(':userId/addresses/:addressId')
  removeAddress(
    @Param('userId') userId: string,
    @Param('addressId') addressId: string,
  ) {
    return this.profileService.removeAddress(+userId, +addressId);
  }
}
