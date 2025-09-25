import { Test, TestingModule } from '@nestjs/testing';
import { LanguageLabel5Service } from './language-label_5.service';

describe('LanguageLabel5Service', () => {
  let service: LanguageLabel5Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LanguageLabel5Service],
    }).compile();

    service = module.get<LanguageLabel5Service>(LanguageLabel5Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
