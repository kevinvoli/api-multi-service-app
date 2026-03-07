import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MultiLevelReferralMaster } from './entities/multi-level-referral-master.entity';
import { CreateMultiLevelReferralMasterDto } from './dto/create-multi-level-referral-master.dto';
import { UpdateMultiLevelReferralMasterDto } from './dto/update-multi-level-referral-master.dto';

@Injectable()
export class MultiLevelReferralMasterService {
  constructor(
    @InjectRepository(MultiLevelReferralMaster)
    private readonly repository: Repository<MultiLevelReferralMaster>,
  ) {}

  async create(createDto: CreateMultiLevelReferralMasterDto): Promise<MultiLevelReferralMaster> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<MultiLevelReferralMaster[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<MultiLevelReferralMaster> {
    const entity = await this.repository.findOneBy({ iReferralId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateMultiLevelReferralMasterDto): Promise<MultiLevelReferralMaster> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
