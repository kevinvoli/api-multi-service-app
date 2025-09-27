import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateRegisterDriverDto } from './dto/create-register-driver.dto';
import { UpdateRegisterDriverDto } from './dto/update-register-driver.dto';
import { RegisterDriver } from './entities/register-driver.entity';

@Injectable()
export class RegisterDriverService {
  constructor(
    @InjectRepository(RegisterDriver)
    private readonly registerDriverRepository: Repository<RegisterDriver>,
  ) {}
  async create(createRegisterDriverDto: CreateRegisterDriverDto): Promise<Omit<RegisterDriver, 'vPassword'>> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createRegisterDriverDto.vPassword, salt);

    const newDriver = this.registerDriverRepository.create({
      ...createRegisterDriverDto,
      vPassword: hashedPassword,
    });

    const savedDriver = await this.registerDriverRepository.save(newDriver);

    const { vPassword, ...result } = savedDriver;
    return result;
  }

  async findAll(): Promise<Omit<RegisterDriver, 'vPassword'>[]> {
    const drivers = await this.registerDriverRepository.find();
    return drivers.map(driver => {
      const { vPassword, ...result } = driver;
      return result;
    });
  }

  async findOne(id: number): Promise<Omit<RegisterDriver, 'vPassword'>> {
    const driver = await this.registerDriverRepository.findOne({ where: { iDriverId: id } });
    if (!driver) {
      throw new NotFoundException(`Driver with ID "${id}" not found`);
    }
    const { vPassword, ...result } = driver;
    return result;
  }

  async update(id: number, updateRegisterDriverDto: UpdateRegisterDriverDto): Promise<Omit<RegisterDriver, 'vPassword'>> {
    if (updateRegisterDriverDto.vPassword) {
      const salt = await bcrypt.genSalt();
      updateRegisterDriverDto.vPassword = await bcrypt.hash(updateRegisterDriverDto.vPassword, salt);
    }

    const driver = await this.registerDriverRepository.preload({
      iDriverId: id,
      ...updateRegisterDriverDto,
    });

    if (!driver) {
      throw new NotFoundException(`Driver with ID "${id}" not found`);
    }

    const updatedDriver = await this.registerDriverRepository.save(driver);
    const { vPassword, ...result } = updatedDriver;
    return result;
  }

  async remove(id: number): Promise<Omit<RegisterDriver, 'vPassword'>> {
    const driver = await this.registerDriverRepository.findOne({ where: { iDriverId: id } });
    if (!driver) {
      throw new NotFoundException(`Driver with ID "${id}" not found`);
    }

    driver.eStatus = 'Deleted';
    const deletedDriver = await this.registerDriverRepository.save(driver);

    const { vPassword, ...result } = deletedDriver;
    return result;
  }
}
