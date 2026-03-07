import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUser } from './entities/register-user.entity';
import { CreateRegisterUserDto } from './dto/create-register-user.dto';
import { UpdateRegisterUserDto } from './dto/update-register-user.dto';

@Injectable()
export class RegisterUserService {
  constructor(
    @InjectRepository(RegisterUser)
    private readonly repository: Repository<RegisterUser>,
  ) {}

  async create(createDto: CreateRegisterUserDto): Promise<RegisterUser> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<RegisterUser[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<RegisterUser> {
    const entity = await this.repository.findOneBy({ iUserId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateRegisterUserDto): Promise<RegisterUser> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
