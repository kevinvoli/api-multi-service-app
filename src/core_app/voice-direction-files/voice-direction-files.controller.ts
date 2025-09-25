import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VoiceDirectionFilesService } from './voice-direction-files.service';
import { CreateVoiceDirectionFileDto } from './dto/create-voice-direction-file.dto';
import { UpdateVoiceDirectionFileDto } from './dto/update-voice-direction-file.dto';

@Controller('voice-direction-files')
export class VoiceDirectionFilesController {
  constructor(private readonly voiceDirectionFilesService: VoiceDirectionFilesService) {}

  @Post()
  create(@Body() createVoiceDirectionFileDto: CreateVoiceDirectionFileDto) {
    return this.voiceDirectionFilesService.create(createVoiceDirectionFileDto);
  }

  @Get()
  findAll() {
    return this.voiceDirectionFilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voiceDirectionFilesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVoiceDirectionFileDto: UpdateVoiceDirectionFileDto) {
    return this.voiceDirectionFilesService.update(+id, updateVoiceDirectionFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voiceDirectionFilesService.remove(+id);
  }
}
