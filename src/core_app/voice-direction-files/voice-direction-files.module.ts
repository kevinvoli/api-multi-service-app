import { Module } from '@nestjs/common';
import { VoiceDirectionFilesService } from './voice-direction-files.service';
import { VoiceDirectionFilesController } from './voice-direction-files.controller';

@Module({
  controllers: [VoiceDirectionFilesController],
  providers: [VoiceDirectionFilesService],
})
export class VoiceDirectionFilesModule {}
