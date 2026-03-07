import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminGroupPermission } from './entities/admin-group-permission.entity';
import { CreateAdminGroupPermissionDto } from './dto/create-admin-group-permission.dto';
import { UpdateAdminGroupPermissionDto } from './dto/update-admin-group-permission.dto';

@Injectable()
export class AdminGroupPermissionService {
  constructor(
    @InjectRepository(AdminGroupPermission)
    private readonly repository: Repository<AdminGroupPermission>,
  ) {}

  async create(createDto: CreateAdminGroupPermissionDto): Promise<AdminGroupPermission> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<AdminGroupPermission[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<AdminGroupPermission> {
    const entity = await this.repository.findOneBy({ id: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateAdminGroupPermissionDto): Promise<AdminGroupPermission> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
