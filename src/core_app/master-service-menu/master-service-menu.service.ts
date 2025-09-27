import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMasterServiceMenuDto } from './dto/create-master-service-menu.dto';
import { UpdateMasterServiceMenuDto } from './dto/update-master-service-menu.dto';
import { MasterServiceMenu } from './entities/master-service-menu.entity';

@Injectable()
export class MasterServiceMenuService {
  constructor(
    @InjectRepository(MasterServiceMenu)
    private readonly masterServiceMenuRepository: Repository<MasterServiceMenu>,
  ) {}

  create(createMasterServiceMenuDto: CreateMasterServiceMenuDto): Promise<MasterServiceMenu> {
    const masterServiceMenu = this.masterServiceMenuRepository.create(createMasterServiceMenuDto);
    return this.masterServiceMenuRepository.save(masterServiceMenu);
  }

  findAll(): Promise<MasterServiceMenu[]> {
    return this.masterServiceMenuRepository.find();
  }

  async findOne(id: number): Promise<MasterServiceMenu> {
    const masterServiceMenu = await this.masterServiceMenuRepository.findOne({ where: { iServiceMenuId: id } });
    if (!masterServiceMenu) {
      throw new NotFoundException(`MasterServiceMenu with ID #${id} not found`);
    }
    return masterServiceMenu;
  }

  async update(id: number, updateMasterServiceMenuDto: UpdateMasterServiceMenuDto): Promise<MasterServiceMenu> {
    await this.findOne(id); // will throw error if not found
    await this.masterServiceMenuRepository.update(id, updateMasterServiceMenuDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.masterServiceMenuRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`MasterServiceMenu with ID #${id} not found`);
    }
  }
}