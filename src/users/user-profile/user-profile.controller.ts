import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  Query,
  UsePipes,
} from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { AddAddressDto } from './dto/add-address.dto';
import { GetProfileQueryDto } from './dto/get-profile-query.dto';
import { VerifyPasswordDto } from './dto/verify-password.dto';
import { ADMIN_TYPE, AuthUser, Role } from '../../auth/auth.types';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { RateLimit } from '../../auth/decorators/rate-limit.decorator';
import { Roles } from '../../auth/decorators/roles.decorator';
import { assertSelf, isAdmin } from '../../auth/ownership';
import { StrictValidationPipe } from '../../common/pipes/strict-validation.pipe';

@Controller('profile')
@Roles('rider', 'driver', 'company')
@UsePipes(StrictValidationPipe)
export class UserProfileController {
  constructor(private readonly profileService: UserProfileService) {}

  /** GET /profile/:userId?userType=rider — Obtenir le profil */
  @Get(':userId')
  getProfile(
    @Param('userId', ParseIntPipe) userId: number,
    @Query() query: GetProfileQueryDto,
    @CurrentUser() user: AuthUser,
  ) {
    const userType: Role =
      query.userType ?? (isAdmin(user) ? 'rider' : (user.userType as Role));
    assertSelf(user, userId, userType);
    return this.profileService.getProfile(userId, userType);
  }

  /** PATCH /profile — Mettre à jour le profil (ajax_profile_rider_a.php action=all) */
  @Patch()
  updateProfile(@Body() dto: UpdateProfileDto, @CurrentUser() user: AuthUser) {
    assertSelf(user, dto.iUserId, dto.userType);
    return this.profileService.updateProfile(dto);
  }

  /** POST /profile/change-password — Changer le mot de passe (action=pass) */
  @RateLimit(10, 60_000)
  @Post('change-password')
  changePassword(
    @Body() dto: ChangePasswordDto,
    @CurrentUser() user: AuthUser,
  ) {
    assertSelf(
      user,
      dto.iUserId,
      dto.userType === 'admin' ? ADMIN_TYPE : dto.userType,
    );
    return this.profileService.changePassword(dto);
  }

  /** POST /profile/verify-password — Vérifier le mot de passe (ajax_check_password_a.php) */
  @RateLimit(10, 60_000)
  @Post('verify-password')
  verifyPassword(
    @Body() dto: VerifyPasswordDto,
    @CurrentUser() user: AuthUser,
  ) {
    assertSelf(user, dto.iUserId, dto.userType);
    return this.profileService.verifyPassword(
      dto.iUserId,
      dto.userType,
      dto.password,
    );
  }

  /** POST /profile/addresses — Ajouter une adresse (ajax_add_delivery_address.php) */
  @Post('addresses')
  addAddress(@Body() dto: AddAddressDto, @CurrentUser() user: AuthUser) {
    assertSelf(user, dto.iUserId, 'rider');
    return this.profileService.addAddress(dto);
  }

  /** GET /profile/:userId/addresses — Lister les adresses */
  @Get(':userId/addresses')
  listAddresses(
    @Param('userId', ParseIntPipe) userId: number,
    @CurrentUser() user: AuthUser,
  ) {
    assertSelf(user, userId, 'rider');
    return this.profileService.listAddresses(userId);
  }

  /** DELETE /profile/:userId/addresses/:addressId — Supprimer une adresse (soft delete) */
  @Delete(':userId/addresses/:addressId')
  removeAddress(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('addressId', ParseIntPipe) addressId: number,
    @CurrentUser() user: AuthUser,
  ) {
    assertSelf(user, userId, 'rider');
    return this.profileService.removeAddress(userId, addressId);
  }
}
