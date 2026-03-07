import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminPermissionDisplayGroups } from './entities/admin-permissions-display-group.entity';
import { CreateAdminPermissionsDisplayGroupDto } from './dto/create-admin-permissions-display-group.dto';
import { UpdateAdminPermissionsDisplayGroupDto } from './dto/update-admin-permissions-display-group.dto';

@Injectable()
export class AdminPermissionsDisplayGroupsService {
  constructor(
    @InjectRepository(AdminPermissionDisplayGroups)
    private readonly repository: Repository<AdminPermissionDisplayGroups>,
  ) {}

  async create(createDto: CreateAdminPermissionsDisplayGroupDto): Promise<AdminPermissionDisplayGroups> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<AdminPermissionDisplayGroups[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<AdminPermissionDisplayGroups> {
    const entity = await this.repository.findOneBy({ id: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateAdminPermissionsDisplayGroupDto): Promise<AdminPermissionDisplayGroups> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
