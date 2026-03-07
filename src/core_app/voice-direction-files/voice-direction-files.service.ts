import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VoiceDirectionFiles } from './entities/voice-direction-file.entity';
import { CreateVoiceDirectionFileDto } from './dto/create-voice-direction-file.dto';
import { UpdateVoiceDirectionFileDto } from './dto/update-voice-direction-file.dto';

@Injectable()
export class VoiceDirectionFilesService {
  constructor(
    @InjectRepository(VoiceDirectionFiles)
    private readonly repository: Repository<VoiceDirectionFiles>,
  ) {}

  async create(createDto: CreateVoiceDirectionFileDto): Promise<VoiceDirectionFiles> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<VoiceDirectionFiles[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<VoiceDirectionFiles> {
    const entity = await this.repository.findOneBy({ iVoiceDirectionFileId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateVoiceDirectionFileDto): Promise<VoiceDirectionFiles> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
