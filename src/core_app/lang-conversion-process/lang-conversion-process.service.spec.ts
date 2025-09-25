import { Test, TestingModule } from '@nestjs/testing';
import { LangConversionProcessService } from './lang-conversion-process.service';

describe('LangConversionProcessService', () => {
  let service: LangConversionProcessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LangConversionProcessService],
    }).compile();

    service = module.get<LangConversionProcessService>(LangConversionProcessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
