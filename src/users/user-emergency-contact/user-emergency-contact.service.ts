import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEmergencyContact } from './entities/user-emergency-contact.entity';
import { CreateUserEmergencyContactDto } from './dto/create-user-emergency-contact.dto';
import { UpdateUserEmergencyContactDto } from './dto/update-user-emergency-contact.dto';

@Injectable()
export class UserEmergencyContactService {
  constructor(
    @InjectRepository(UserEmergencyContact)
    private readonly repository: Repository<UserEmergencyContact>,
  ) {}

  async create(createDto: CreateUserEmergencyContactDto): Promise<UserEmergencyContact> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<UserEmergencyContact[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<UserEmergencyContact> {
    const entity = await this.repository.findOneBy({ iEmergencyId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateUserEmergencyContactDto): Promise<UserEmergencyContact> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
