import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminPermissionDto } from './dto/create-admin-permission.dto';
import { UpdateAdminPermissionDto } from './dto/update-admin-permission.dto';
import { AdminPermissions } from './entities/admin-permission.entity';

@Injectable()
export class AdminPermissionsService {
  constructor(
    @InjectRepository(AdminPermissions)
    private readonly adminPermissionsRepository: Repository<AdminPermissions>,
  ) {}

  async create(createDto: CreateAdminPermissionDto): Promise<AdminPermissions> {
    const newPermission = this.adminPermissionsRepository.create(createDto);
    return await this.adminPermissionsRepository.save(newPermission);
  }

  async findAll(): Promise<AdminPermissions[]> {
    return await this.adminPermissionsRepository.find();
  }

  async findOne(id: number): Promise<AdminPermissions> {
    const permission = await this.adminPermissionsRepository.findOne({ where: { id } });
    if (!permission) {
      throw new NotFoundException(`AdminPermission with ID #${id} not found`);
    }
    return permission;
  }

  async update(id: number, updateDto: UpdateAdminPermissionDto): Promise<AdminPermissions> {
    const permission = await this.adminPermissionsRepository.preload({
      id,
      ...updateDto,
    });
    if (!permission) {
      throw new NotFoundException(`AdminPermission with ID #${id} not found`);
    }
    return await this.adminPermissionsRepository.save(permission);
  }

  async remove(id: number): Promise<{ message: string }> {
    const permission = await this.findOne(id);
    await this.adminPermissionsRepository.remove(permission);
    return { message: `AdminPermission with ID #${id} has been removed` };
  }
}