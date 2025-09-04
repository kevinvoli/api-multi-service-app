import { Test, TestingModule } from '@nestjs/testing';
import { LanguageLabelService } from './language-label.service';

describe('LanguageLabelService', () => {
  let service: LanguageLabelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LanguageLabelService],
    }).compile();

    service = module.get<LanguageLabelService>(LanguageLabelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
