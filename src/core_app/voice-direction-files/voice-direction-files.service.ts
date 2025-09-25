import { Injectable } from '@nestjs/common';
import { CreateVoiceDirectionFileDto } from './dto/create-voice-direction-file.dto';
import { UpdateVoiceDirectionFileDto } from './dto/update-voice-direction-file.dto';

@Injectable()
export class VoiceDirectionFilesService {
  create(createVoiceDirectionFileDto: CreateVoiceDirectionFileDto) {
    return 'This action adds a new voiceDirectionFile';
  }

  findAll() {
    return `This action returns all voiceDirectionFiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} voiceDirectionFile`;
  }

  update(id: number, updateVoiceDirectionFileDto: UpdateVoiceDirectionFileDto) {
    return `This action updates a #${id} voiceDirectionFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} voiceDirectionFile`;
  }
}
