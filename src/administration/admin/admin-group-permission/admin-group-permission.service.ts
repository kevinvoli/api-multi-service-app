import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminGroupPermissionDto } from './dto/create-admin-group-permission.dto';
import { UpdateAdminGroupPermissionDto } from './dto/update-admin-group-permission.dto';
import { AdminGroupPermission } from './entities/admin-group-permission.entity';

@Injectable()
export class AdminGroupPermissionService {
  constructor(
    @InjectRepository(AdminGroupPermission)
    private readonly adminGroupPermissionRepository: Repository<AdminGroupPermission>,
  ) {}

  async create(createDto: CreateAdminGroupPermissionDto): Promise<AdminGroupPermission> {
    const newPermission = this.adminGroupPermissionRepository.create(createDto);
    return await this.adminGroupPermissionRepository.save(newPermission);
  }

  async findAll(): Promise<AdminGroupPermission[]> {
    return await this.adminGroupPermissionRepository.find();
  }

  async findOne(id: number): Promise<AdminGroupPermission> {
    const permission = await this.adminGroupPermissionRepository.findOne({ where: { id } });
    if (!permission) {
      throw new NotFoundException(`AdminGroupPermission with ID #${id} not found`);
    }
    return permission;
  }

  async update(id: number, updateDto: UpdateAdminGroupPermissionDto): Promise<AdminGroupPermission> {
    const permission = await this.adminGroupPermissionRepository.preload({
      id,
      ...updateDto,
    });
    if (!permission) {
      throw new NotFoundException(`AdminGroupPermission with ID #${id} not found`);
    }
    return await this.adminGroupPermissionRepository.save(permission);
  }

  async remove(id: number): Promise<{ message: string }> {
    const permission = await this.findOne(id);
    await this.adminGroupPermissionRepository.remove(permission);
    return { message: `AdminGroupPermission with ID #${id} has been removed` };
  }
}