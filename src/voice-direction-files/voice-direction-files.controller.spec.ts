import { Test, TestingModule } from '@nestjs/testing';
import { VoiceDirectionFilesController } from './voice-direction-files.controller';
import { VoiceDirectionFilesService } from './voice-direction-files.service';

describe('VoiceDirectionFilesController', () => {
  let controller: VoiceDirectionFilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoiceDirectionFilesController],
      providers: [VoiceDirectionFilesService],
    }).compile();

    controller = module.get<VoiceDirectionFilesController>(VoiceDirectionFilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
