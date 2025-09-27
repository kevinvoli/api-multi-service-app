import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminPermissionsDisplayGroupDto } from './dto/create-admin-permissions-display-group.dto';
import { UpdateAdminPermissionsDisplayGroupDto } from './dto/update-admin-permissions-display-group.dto';
import { AdminPermissionDisplayGroups } from './entities/admin-permissions-display-group.entity';

@Injectable()
export class AdminPermissionsDisplayGroupsService {
  constructor(
    @InjectRepository(AdminPermissionDisplayGroups)
    private readonly repository: Repository<AdminPermissionDisplayGroups>,
  ) {}

  async create(createDto: CreateAdminPermissionsDisplayGroupDto): Promise<AdminPermissionDisplayGroups> {
    const newGroup = this.repository.create(createDto);
    return await this.repository.save(newGroup);
  }

  async findAll(): Promise<AdminPermissionDisplayGroups[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<AdminPermissionDisplayGroups> {
    const group = await this.repository.findOne({ where: { id } });
    if (!group) {
      throw new NotFoundException(`Display Group with ID #${id} not found`);
    }
    return group;
  }

  async update(id: number, updateDto: UpdateAdminPermissionsDisplayGroupDto): Promise<AdminPermissionDisplayGroups> {
    const group = await this.repository.preload({
      id,
      ...updateDto,
    });
    if (!group) {
      throw new NotFoundException(`Display Group with ID #${id} not found`);
    }
    return await this.repository.save(group);
  }

  async remove(id: number): Promise<{ message: string }> {
    const group = await this.findOne(id);
    await this.repository.remove(group);
    return { message: `Display Group with ID #${id} has been removed` };
  }
}