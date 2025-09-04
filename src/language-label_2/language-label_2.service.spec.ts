import { Test, TestingModule } from '@nestjs/testing';
import { LanguageLabel2Service } from './language-label_2.service';

describe('LanguageLabel2Service', () => {
  let service: LanguageLabel2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LanguageLabel2Service],
    }).compile();

    service = module.get<LanguageLabel2Service>(LanguageLabel2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
