import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import { Administrators } from './entities/administrator.entity';

// Define a type for the admin response that omits the password.
type AdminResponse = Omit<Administrators, 'vPassword'>;

@Injectable()
export class AdministratorsService {
  constructor(
    @InjectRepository(Administrators)
    private readonly repository: Repository<Administrators>,
  ) {}

  async create(createDto: CreateAdministratorDto): Promise<AdminResponse> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createDto.vPassword, salt);

    const newAdmin = this.repository.create({
      ...createDto,
      vPassword: hashedPassword,
    });

    try {
      const savedAdmin = await this.repository.save(newAdmin);
      const { vPassword, ...result } = savedAdmin;
      return result;
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new BadRequestException('Email already exists.');
      }
      throw error;
    }
  }

  async findAll(): Promise<AdminResponse[]> {
    return await this.repository.find({
      select: {
        iAdminId: true,
        iGroupId: true,
        vFirstName: true,
        vLastName: true,
        vEmail: true,
        vContactNo: true,
        vCode: true,
        vCountry: true,
        vState: true,
        vCity: true,
        vAddress: true,
        vAddressLat: true,
        vAddressLong: true,
        fHotelServiceCharge: true,
        vPaymentEmail: true,
        vBankAccountHolderName: true,
        vAccountNumber: true,
        vBankName: true,
        vBankLocation: true,
        vBicSwiftCode: true,
        eStatus: true,
        eDefault: true,
      },
    });
  }

  async findOne(id: number): Promise<AdminResponse> {
    const admin = await this.repository.findOne({
      where: { iAdminId: id },
      select: {
        iAdminId: true,
        iGroupId: true,
        vFirstName: true,
        vLastName: true,
        vEmail: true,
        vContactNo: true,
        vCode: true,
        vCountry: true,
        vState: true,
        vCity: true,
        vAddress: true,
        vAddressLat: true,
        vAddressLong: true,
        fHotelServiceCharge: true,
        vPaymentEmail: true,
        vBankAccountHolderName: true,
        vAccountNumber: true,
        vBankName: true,
        vBankLocation: true,
        vBicSwiftCode: true,
        eStatus: true,
        eDefault: true,
      },
    });
    if (!admin) {
      throw new NotFoundException(`Administrator with ID #${id} not found`);
    }
    return admin;
  }

  async update(id: number, updateDto: UpdateAdministratorDto): Promise<AdminResponse> {
    if (updateDto.vPassword) {
      const salt = await bcrypt.genSalt();
      updateDto.vPassword = await bcrypt.hash(updateDto.vPassword, salt);
    }

    const adminToUpdate = await this.repository.preload({
      iAdminId: id,
      ...updateDto,
    });

    if (!adminToUpdate) {
      throw new NotFoundException(`Administrator with ID #${id} not found`);
    }

    const updatedAdmin = await this.repository.save(adminToUpdate);
    const { vPassword, ...result } = updatedAdmin;
    return result;
  }

  async remove(id: number): Promise<{ message: string }> {
    const admin = await this.repository.findOne({ where: { iAdminId: id } });
     if (!admin) {
      throw new NotFoundException(`Administrator with ID #${id} not found`);
    }
    await this.repository.remove(admin);
    return { message: `Administrator with ID #${id} has been removed` };
  }
}