import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminPermissions } from './entities/admin-permission.entity';
import { CreateAdminPermissionDto } from './dto/create-admin-permission.dto';
import { UpdateAdminPermissionDto } from './dto/update-admin-permission.dto';

@Injectable()
export class AdminPermissionsService {
  constructor(
    @InjectRepository(AdminPermissions)
    private readonly repository: Repository<AdminPermissions>,
  ) {}

  async create(createDto: CreateAdminPermissionDto): Promise<AdminPermissions> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<AdminPermissions[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<AdminPermissions> {
    const entity = await this.repository.findOneBy({ id: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateAdminPermissionDto): Promise<AdminPermissions> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
