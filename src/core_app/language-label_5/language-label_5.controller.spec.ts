import { Test, TestingModule } from '@nestjs/testing';
import { LanguageLabel5Controller } from './language-label_5.controller';
import { LanguageLabel5Service } from './language-label_5.service';

describe('LanguageLabel5Controller', () => {
  let controller: LanguageLabel5Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguageLabel5Controller],
      providers: [LanguageLabel5Service],
    }).compile();

    controller = module.get<LanguageLabel5Controller>(LanguageLabel5Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
