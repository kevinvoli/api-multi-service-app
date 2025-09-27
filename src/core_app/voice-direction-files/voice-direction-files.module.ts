import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoiceDirectionFilesService } from './voice-direction-files.service';
import { VoiceDirectionFilesController } from './voice-direction-files.controller';
import { VoiceDirectionFiles } from './entities/voice-direction-file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VoiceDirectionFiles])],
  controllers: [VoiceDirectionFilesController],
  providers: [VoiceDirectionFilesService],
})
export class VoiceDirectionFilesModule {}
