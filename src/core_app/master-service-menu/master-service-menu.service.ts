import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MasterServiceMenu } from './entities/master-service-menu.entity';
import { CreateMasterServiceMenuDto } from './dto/create-master-service-menu.dto';
import { UpdateMasterServiceMenuDto } from './dto/update-master-service-menu.dto';

@Injectable()
export class MasterServiceMenuService {
  constructor(
    @InjectRepository(MasterServiceMenu)
    private readonly repository: Repository<MasterServiceMenu>,
  ) {}

  async create(createDto: CreateMasterServiceMenuDto): Promise<MasterServiceMenu> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<MasterServiceMenu[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<MasterServiceMenu> {
    const entity = await this.repository.findOneBy({ iServiceMenuId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateMasterServiceMenuDto): Promise<MasterServiceMenu> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
