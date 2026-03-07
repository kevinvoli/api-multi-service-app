import { Module } from '@nestjs/common';
import { VoiceDirectionFiles } from './entities/voice-direction-file.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoiceDirectionFilesService } from './voice-direction-files.service';
import { VoiceDirectionFilesController } from './voice-direction-files.controller';

@Module({
  imports: [TypeOrmModule.forFeature([VoiceDirectionFiles])],
  controllers: [VoiceDirectionFilesController],
  providers: [VoiceDirectionFilesService],
  exports: [TypeOrmModule.forFeature([VoiceDirectionFiles])],
})
export class VoiceDirectionFilesModule {}
