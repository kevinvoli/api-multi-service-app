import { Test, TestingModule } from '@nestjs/testing';
import { LanguageLabel1Service } from './language-label_1.service';

describe('LanguageLabel1Service', () => {
  let service: LanguageLabel1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LanguageLabel1Service],
    }).compile();

    service = module.get<LanguageLabel1Service>(LanguageLabel1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
