import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminGroups } from './entities/admin-group.entity';
import { CreateAdminGroupDto } from './dto/create-admin-group.dto';
import { UpdateAdminGroupDto } from './dto/update-admin-group.dto';

@Injectable()
export class AdminGroupsService {
  constructor(
    @InjectRepository(AdminGroups)
    private readonly repository: Repository<AdminGroups>,
  ) {}

  async create(createDto: CreateAdminGroupDto): Promise<AdminGroups> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<AdminGroups[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<AdminGroups> {
    const entity = await this.repository.findOneBy({ iGroupId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateAdminGroupDto): Promise<AdminGroups> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
