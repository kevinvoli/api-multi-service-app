import * as crypto from 'crypto';
import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUser } from '../register-user/entities/register-user.entity';
import { RegisterDriver } from '../register-driver/entities/register-driver.entity';
import { Company } from '../company/entities/company.entity';
import { UserAddress } from '../user-address/entities/user-address.entity';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { AddAddressDto } from './dto/add-address.dto';

function md5(str: string): string {
  return crypto.createHash('md5').update(str).digest('hex');
}

@Injectable()
export class UserProfileService {
  constructor(
    @InjectRepository(RegisterUser) private readonly userRepo: Repository<RegisterUser>,
    @InjectRepository(RegisterDriver) private readonly driverRepo: Repository<RegisterDriver>,
    @InjectRepository(Company) private readonly companyRepo: Repository<Company>,
    @InjectRepository(UserAddress) private readonly addressRepo: Repository<UserAddress>,
  ) {}

  async getProfile(userId: number, userType: string): Promise<any> {
    if (userType === 'rider') {
      const u = await this.userRepo.findOneBy({ iUserId: userId } as any);
      if (!u) throw new NotFoundException();
      return u;
    }
    if (userType === 'driver') {
      const d = await this.driverRepo.findOneBy({ iDriverId: userId } as any);
      if (!d) throw new NotFoundException();
      return d;
    }
    const c = await this.companyRepo.findOneBy({ iCompanyId: userId } as any);
    if (!c) throw new NotFoundException();
    return c;
  }

  // Remplace : ajax_profile_rider_a.php (action=all)
  async updateProfile(dto: UpdateProfileDto): Promise<{ success: boolean }> {
    if (dto.userType === 'rider') {
      const user = await this.userRepo.findOneBy({ iUserId: dto.iUserId } as any) as any;
      if (!user) throw new NotFoundException();
      let newPwd: string | undefined;
      if (dto.currentPassword && dto.newPassword) {
        if (md5(dto.currentPassword) !== user.vPassword)
          throw new UnauthorizedException('Mot de passe actuel incorrect');
        newPwd = md5(dto.newPassword);
      }
      const up: Record<string, any> = {};
      if (dto.vEmail && dto.vEmail.toLowerCase() !== (user.vEmail || '').toLowerCase())
        up.eEmailVerified = 'No';
      if (dto.vPhone && dto.vPhone !== user.vPhone) up.ePhoneVerified = 'No';
      if (dto.vName !== undefined) up.vName = dto.vName;
      if (dto.vLastName !== undefined) up.vLastName = dto.vLastName;
      if (dto.vEmail !== undefined) up.vEmail = dto.vEmail.toLowerCase();
      if (dto.vPhone !== undefined) up.vPhone = dto.vPhone;
      if (dto.vPhoneCode !== undefined) up.vPhoneCode = dto.vPhoneCode;
      if (dto.vCountry !== undefined) up.vCountry = dto.vCountry;
      if (dto.vLang !== undefined) up.vLang = dto.vLang;
      if (dto.vCurrencyPassenger !== undefined) up.vCurrencyPassenger = dto.vCurrencyPassenger;
      if (newPwd) up.vPassword = newPwd;
      await this.userRepo.update(dto.iUserId, up as any);
      return { success: true };
    }
    if (dto.userType === 'driver') {
      const driver = await this.driverRepo.findOneBy({ iDriverId: dto.iUserId } as any) as any;
      if (!driver) throw new NotFoundException();
      let newPwd: string | undefined;
      if (dto.currentPassword && dto.newPassword) {
        if (md5(dto.currentPassword) !== driver.vPassword)
          throw new UnauthorizedException('Mot de passe actuel incorrect');
        newPwd = md5(dto.newPassword);
      }
      const up: Record<string, any> = {};
      if (dto.vName !== undefined) up.vName = dto.vName;
      if (dto.vLastName !== undefined) up.vLastName = dto.vLastName;
      if (dto.vEmail !== undefined) up.vEmail = dto.vEmail.toLowerCase();
      if (dto.vPhone !== undefined) up.vPhone = dto.vPhone;
      if (newPwd) up.vPassword = newPwd;
      await this.driverRepo.update(dto.iUserId, up as any);
      return { success: true };
    }
    throw new BadRequestException('userType non supporte');
  }

  // Remplace : ajax_profile_rider_a.php (action=pass)
  async changePassword(dto: ChangePasswordDto): Promise<{ success: boolean }> {
    if (dto.userType === 'rider') {
      const u = await this.userRepo.findOneBy({ iUserId: dto.iUserId } as any) as any;
      if (!u) throw new NotFoundException();
      if (md5(dto.currentPassword) !== u.vPassword)
        throw new UnauthorizedException('Mot de passe actuel incorrect');
      await this.userRepo.update(dto.iUserId, { vPassword: md5(dto.newPassword) } as any);
      return { success: true };
    }
    if (dto.userType === 'driver') {
      const d = await this.driverRepo.findOneBy({ iDriverId: dto.iUserId } as any) as any;
      if (!d) throw new NotFoundException();
      if (md5(dto.currentPassword) !== d.vPassword)
        throw new UnauthorizedException('Mot de passe actuel incorrect');
      await this.driverRepo.update(dto.iUserId, { vPassword: md5(dto.newPassword) } as any);
      return { success: true };
    }
    if (dto.userType === 'company') {
      const c = await this.companyRepo.findOneBy({ iCompanyId: dto.iUserId } as any) as any;
      if (!c) throw new NotFoundException();
      if (md5(dto.currentPassword) !== c.vPassword)
        throw new UnauthorizedException('Mot de passe actuel incorrect');
      await this.companyRepo.update(dto.iUserId, { vPassword: md5(dto.newPassword) } as any);
      return { success: true };
    }
    throw new BadRequestException('userType non supporte');
  }

  // Remplace : ajax_check_password_a.php
  async verifyPassword(userId: number, userType: string, password: string): Promise<{ valid: boolean }> {
    const hash = md5(password);
    let stored = '';
    if (userType === 'rider') {
      const u = await this.userRepo.findOneBy({ iUserId: userId } as any) as any;
      stored = u?.vPassword || '';
    } else if (userType === 'driver') {
      const d = await this.driverRepo.findOneBy({ iDriverId: userId } as any) as any;
      stored = d?.vPassword || '';
    } else {
      const c = await this.companyRepo.findOneBy({ iCompanyId: userId } as any) as any;
      stored = c?.vPassword || '';
    }
    return { valid: hash === stored };
  }

  // Remplace : ajax_add_delivery_address.php (adddeliveryaddress)
  async addAddress(dto: AddAddressDto): Promise<UserAddress> {
    const address = this.addressRepo.create({
      iUserId: dto.iUserId,
      eUserType: 'Rider',
      vServiceAddress: dto.vServiceAddress,
      vBuildingNo: dto.vBuildingNo,
      vLandmark: dto.vLandmark || '',
      vAddressType: dto.vAddressType || 'Other',
      vLatitude: dto.vLatitude,
      vLongitude: dto.vLongitude,
      dAddedDate: new Date(),
      vTimeZone: dto.vTimeZone || 'UTC',
      eStatus: 'Active',
    } as any);
    return this.addressRepo.save(address) as any;
  }

  async listAddresses(userId: number): Promise<UserAddress[]> {
    return this.addressRepo
      .createQueryBuilder('ua')
      .where('ua.iUserId = :uid', { uid: userId })
      .andWhere("ua.eStatus = 'Active'")
      .andWhere("ua.eUserType = 'Rider'")
      .orderBy('ua.iUserAddressId', 'DESC')
      .getMany() as any;
  }

  // Remplace : ajax_add_delivery_address.php (removeAddress)
  async removeAddress(userId: number, addressId: number): Promise<{ success: boolean }> {
    await this.addressRepo.update(
      { iUserAddressId: addressId, iUserId: userId } as any,
      { eStatus: 'Deleted' } as any,
    );
    return { success: true };
  }
}
