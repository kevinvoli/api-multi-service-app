import { Test, TestingModule } from '@nestjs/testing';
import { VoiceDirectionFilesService } from './voice-direction-files.service';

describe('VoiceDirectionFilesService', () => {
  let service: VoiceDirectionFilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoiceDirectionFilesService],
    }).compile();

    service = module.get<VoiceDirectionFilesService>(VoiceDirectionFilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
