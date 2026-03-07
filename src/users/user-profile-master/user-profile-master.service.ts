import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserProfileMaster } from './entities/user-profile-master.entity';
import { CreateUserProfileMasterDto } from './dto/create-user-profile-master.dto';
import { UpdateUserProfileMasterDto } from './dto/update-user-profile-master.dto';

@Injectable()
export class UserProfileMasterService {
  constructor(
    @InjectRepository(UserProfileMaster)
    private readonly repository: Repository<UserProfileMaster>,
  ) {}

  async create(createDto: CreateUserProfileMasterDto): Promise<UserProfileMaster> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<UserProfileMaster[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<UserProfileMaster> {
    const entity = await this.repository.findOneBy({ iUserProfileMasterId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateUserProfileMasterDto): Promise<UserProfileMaster> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
