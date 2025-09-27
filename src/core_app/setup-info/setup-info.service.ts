import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSetupInfoDto } from './dto/create-setup-info.dto';
import { UpdateSetupInfoDto } from './dto/update-setup-info.dto';
import { SetupInfo } from './entities/setup-info.entity';

@Injectable()
export class SetupInfoService {
  constructor(
    @InjectRepository(SetupInfo)
    private readonly setupInfoRepository: Repository<SetupInfo>,
  ) {}

  create(createSetupInfoDto: CreateSetupInfoDto): Promise<SetupInfo> {
    const setupInfo = this.setupInfoRepository.create(createSetupInfoDto);
    return this.setupInfoRepository.save(setupInfo);
  }

  findAll(): Promise<SetupInfo[]> {
    return this.setupInfoRepository.find();
  }

  async findOne(id: number): Promise<SetupInfo> {
    const setupInfo = await this.setupInfoRepository.findOne({ where: { iSetupId: id } });
    if (!setupInfo) {
      throw new NotFoundException(`SetupInfo with ID #${id} not found`);
    }
    return setupInfo;
  }

  async update(id: number, updateSetupInfoDto: UpdateSetupInfoDto): Promise<SetupInfo> {
    await this.findOne(id); // will throw error if not found
    await this.setupInfoRepository.update(id, updateSetupInfoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.setupInfoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`SetupInfo with ID #${id} not found`);
    }
  }
}