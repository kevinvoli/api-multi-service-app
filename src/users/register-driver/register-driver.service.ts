import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDriver } from './entities/register-driver.entity';
import { CreateRegisterDriverDto } from './dto/create-register-driver.dto';
import { UpdateRegisterDriverDto } from './dto/update-register-driver.dto';

@Injectable()
export class RegisterDriverService {
  constructor(
    @InjectRepository(RegisterDriver)
    private readonly repository: Repository<RegisterDriver>,
  ) {}

  async create(createDto: CreateRegisterDriverDto): Promise<RegisterDriver> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<RegisterDriver[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<RegisterDriver> {
    const entity = await this.repository.findOneBy({ iDriverId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateRegisterDriverDto): Promise<RegisterDriver> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
