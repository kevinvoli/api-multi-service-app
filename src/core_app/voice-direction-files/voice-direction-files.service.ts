import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVoiceDirectionFileDto } from './dto/create-voice-direction-file.dto';
import { UpdateVoiceDirectionFileDto } from './dto/update-voice-direction-file.dto';
import { VoiceDirectionFiles } from './entities/voice-direction-file.entity';

@Injectable()
export class VoiceDirectionFilesService {
  constructor(
    @InjectRepository(VoiceDirectionFiles)
    private readonly voiceDirectionFilesRepository: Repository<VoiceDirectionFiles>,
  ) {}

  create(createVoiceDirectionFileDto: CreateVoiceDirectionFileDto): Promise<VoiceDirectionFiles> {
    const voiceDirectionFile = this.voiceDirectionFilesRepository.create(createVoiceDirectionFileDto);
    return this.voiceDirectionFilesRepository.save(voiceDirectionFile);
  }

  findAll(): Promise<VoiceDirectionFiles[]> {
    return this.voiceDirectionFilesRepository.find();
  }

  async findOne(id: number): Promise<VoiceDirectionFiles> {
    const voiceDirectionFile = await this.voiceDirectionFilesRepository.findOne({ where: { iVoiceDirectionFileId: id } });
    if (!voiceDirectionFile) {
      throw new NotFoundException(`VoiceDirectionFile with ID #${id} not found`);
    }
    return voiceDirectionFile;
  }

  async update(id: number, updateVoiceDirectionFileDto: UpdateVoiceDirectionFileDto): Promise<VoiceDirectionFiles> {
    await this.findOne(id); // will throw error if not found
    await this.voiceDirectionFilesRepository.update(id, updateVoiceDirectionFileDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.voiceDirectionFilesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`VoiceDirectionFile with ID #${id} not found`);
    }
  }
}