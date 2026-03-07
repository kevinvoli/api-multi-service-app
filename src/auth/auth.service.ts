import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as crypto from 'crypto';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { RegisterUser } from '../users/register-user/entities/register-user.entity';
import { RegisterDriver } from '../users/register-driver/entities/register-driver.entity';
import { Company } from '../users/company/entities/company.entity';
import { Administrators } from '../administration/administrators/entities/administrator.entity';
import { MemberLog } from '../users/member-logs/entities/member-log.entity';

/** Codes de statut login (compatibles avec le PHP legacy) */
export enum LoginStatus {
  DELETED = 1,
  SUCCESS = 2,
  INVALID_CREDENTIALS = 3,
  INACTIVE = 4,
  ERROR = 5,
}

/** Chiffrement MD5 utilisé par le PHP (fonction encrypt()) */
function encryptMd5(password: string): string {
  return crypto.createHash('md5').update(password).digest('hex');
}

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(RegisterUser)
    private readonly userRepo: Repository<RegisterUser>,
    @InjectRepository(RegisterDriver)
    private readonly driverRepo: Repository<RegisterDriver>,
    @InjectRepository(Company)
    private readonly companyRepo: Repository<Company>,
    @InjectRepository(Administrators)
    private readonly adminRepo: Repository<Administrators>,
    @InjectRepository(MemberLog)
    private readonly memberLogRepo: Repository<MemberLog>,
  ) {}

  // ─── Login principal ────────────────────────────────────────────────────────

  async login(dto: LoginDto) {
    switch (dto.userType) {
      case 'rider':
        return this.loginRider(dto);
      case 'driver':
        return this.loginDriver(dto);
      case 'company':
        return this.loginCompany(dto);
      case 'hotel':
        return this.loginAdmin(dto);
      default:
        throw new UnauthorizedException('Type utilisateur invalide');
    }
  }

  // ─── Login Rider ────────────────────────────────────────────────────────────

  private async loginRider(dto: LoginDto) {
    const user = await this.userRepo
      .createQueryBuilder('u')
      .where('u.vEmail = :login OR u.vPhone = :login', { login: dto.login })
      .getOne();

    if (!user) return { login_status: LoginStatus.INVALID_CREDENTIALS };

    const passwordHash = encryptMd5(dto.password);
    if (user.vPassword !== passwordHash) {
      return { login_status: LoginStatus.INVALID_CREDENTIALS };
    }

    if (user.eStatus === 'Deleted') return { login_status: LoginStatus.DELETED };
    if (user.eStatus === 'Inactive') return { login_status: LoginStatus.INACTIVE };

    await this.logMemberLogin(user.iUserId, 'Passenger');

    const token = this.generateToken(user.iUserId, user.vEmail, 'rider');
    return {
      login_status: LoginStatus.SUCCESS,
      token,
      user: {
        id: user.iUserId,
        name: user.vName,
        lastName: user.vLastName,
        email: user.vEmail,
        phone: user.vPhone,
        userType: 'rider',
      },
    };
  }

  // ─── Login Driver ────────────────────────────────────────────────────────────

  private async loginDriver(dto: LoginDto) {
    const driver = await this.driverRepo
      .createQueryBuilder('d')
      .where('d.vEmail = :login OR d.vPhone = :login', { login: dto.login })
      .getOne();

    if (!driver) return { login_status: LoginStatus.INVALID_CREDENTIALS };

    const passwordHash = encryptMd5(dto.password);
    if (driver.vPassword !== passwordHash) {
      return { login_status: LoginStatus.INVALID_CREDENTIALS };
    }

    if (driver.eStatus === 'Deleted') return { login_status: LoginStatus.DELETED };
    if (driver.eStatus === 'inactive' || driver.eStatus === 'Suspend') return { login_status: LoginStatus.INACTIVE };

    await this.logMemberLogin(driver.iDriverId, 'Driver');

    const token = this.generateToken(driver.iDriverId, driver.vEmail, 'driver');
    return {
      login_status: LoginStatus.SUCCESS,
      token,
      user: {
        id: driver.iDriverId,
        name: driver.vName,
        lastName: driver.vLastName,
        email: driver.vEmail,
        phone: driver.vPhone,
        companyId: driver.iCompanyId,
        userType: 'driver',
      },
    };
  }

  // ─── Login Company ───────────────────────────────────────────────────────────

  private async loginCompany(dto: LoginDto) {
    const qb = this.companyRepo
      .createQueryBuilder('c')
      .where('c.vEmail = :login OR c.vPhone = :login', { login: dto.login });

    if (dto.compSystem) {
      qb.andWhere('c.eSystem = :sys', { sys: dto.compSystem });
    }

    const company = await qb.getOne();
    if (!company) return { login_status: LoginStatus.INVALID_CREDENTIALS };

    const passwordHash = encryptMd5(dto.password);
    if (company.vPassword !== passwordHash) {
      return { login_status: LoginStatus.INVALID_CREDENTIALS };
    }

    if (company.eStatus === 'Deleted') return { login_status: LoginStatus.DELETED };
    if (company.eStatus === 'Inactive') return { login_status: LoginStatus.INACTIVE };

    const token = this.generateToken(company.iCompanyId, company.vEmail, 'company');
    return {
      login_status: LoginStatus.SUCCESS,
      token,
      eSystem: company.eSystem,
      user: {
        id: company.iCompanyId,
        name: company.vCompany,
        email: company.vEmail,
        phone: company.vPhone,
        userType: 'company',
      },
    };
  }

  // ─── Login Admin/Hotel ────────────────────────────────────────────────────────

  private async loginAdmin(dto: LoginDto) {
    const admin = await this.adminRepo
      .createQueryBuilder('a')
      .where('a.vEmail = :email', { email: dto.login })
      .getOne();

    if (!admin) return { login_status: LoginStatus.INVALID_CREDENTIALS };

    // Admin utilise bcrypt (AUTH_OBJ->VerifyPassword dans le PHP)
    const isValid = await bcrypt.compare(dto.password, admin.vPassword);
    if (!isValid) return { login_status: LoginStatus.INVALID_CREDENTIALS };

    if (admin.eStatus !== 'Active') return { login_status: LoginStatus.INACTIVE };

    const token = this.generateToken(admin.iAdminId, admin.vEmail, 'hotel');
    return {
      login_status: LoginStatus.SUCCESS,
      token,
      user: {
        id: admin.iAdminId,
        firstName: admin.vFirstName,
        lastName: admin.vLastName,
        email: admin.vEmail,
        groupId: admin.iGroupId,
        userType: 'hotel',
      },
    };
  }

  // ─── Vérification téléphone ──────────────────────────────────────────────────

  async checkPhone(phone: string, userType: 'rider' | 'driver'): Promise<{ exists: boolean }> {
    if (userType === 'rider') {
      const user = await this.userRepo.findOneBy({ vPhone: phone } as any);
      return { exists: !!user };
    } else {
      const driver = await this.driverRepo.findOneBy({ vPhone: phone } as any);
      return { exists: !!driver };
    }
  }

  // ─── Helpers ─────────────────────────────────────────────────────────────────

  private generateToken(id: number, email: string, userType: 'rider' | 'driver' | 'company' | 'hotel') {
    return this.jwtService.sign({ sub: id, email, userType });
  }

  private async logMemberLogin(memberId: number, memberType: string) {
    try {
      const log = this.memberLogRepo.create({
        iMemberId: memberId,
        eMemberType: memberType as any,
        eMemberLoginType: 'ApiLogin' as any,
      } as any);
      await this.memberLogRepo.save(log);
    } catch {
      // Non bloquant — le log ne doit pas faire échouer le login
    }
  }
}
