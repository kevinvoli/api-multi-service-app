import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminGroupDto } from './dto/create-admin-group.dto';
import { UpdateAdminGroupDto } from './dto/update-admin-group.dto';
import { AdminGroups } from './entities/admin-group.entity';

@Injectable()
export class AdminGroupsService {
  constructor(
    @InjectRepository(AdminGroups)
    private readonly adminGroupsRepository: Repository<AdminGroups>,
  ) {}

  async create(createDto: CreateAdminGroupDto): Promise<AdminGroups> {
    const newGroup = this.adminGroupsRepository.create(createDto);
    return await this.adminGroupsRepository.save(newGroup);
  }

  async findAll(): Promise<AdminGroups[]> {
    return await this.adminGroupsRepository.find();
  }

  async findOne(id: number): Promise<AdminGroups> {
    const group = await this.adminGroupsRepository.findOne({ where: { iGroupId: id } });
    if (!group) {
      throw new NotFoundException(`AdminGroup with ID #${id} not found`);
    }
    return group;
  }

  async update(id: number, updateDto: UpdateAdminGroupDto): Promise<AdminGroups> {
    const group = await this.adminGroupsRepository.preload({
      iGroupId: id,
      ...updateDto,
    });
    if (!group) {
      throw new NotFoundException(`AdminGroup with ID #${id} not found`);
    }
    return await this.adminGroupsRepository.save(group);
  }

  async remove(id: number): Promise<{ message: string }> {
    const group = await this.findOne(id);
    await this.adminGroupsRepository.remove(group);
    return { message: `AdminGroup with ID #${id} has been removed` };
  }
}