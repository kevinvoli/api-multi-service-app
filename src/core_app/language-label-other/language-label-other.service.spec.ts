import { Test, TestingModule } from '@nestjs/testing';
import { LanguageLabelOtherService } from './language-label-other.service';

describe('LanguageLabelOtherService', () => {
  let service: LanguageLabelOtherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LanguageLabelOtherService],
    }).compile();

    service = module.get<LanguageLabelOtherService>(LanguageLabelOtherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
