import { Test, TestingModule } from '@nestjs/testing';
import { LanguageLabel1Controller } from './language-label_1.controller';
import { LanguageLabel1Service } from './language-label_1.service';

describe('LanguageLabel1Controller', () => {
  let controller: LanguageLabel1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguageLabel1Controller],
      providers: [LanguageLabel1Service],
    }).compile();

    controller = module.get<LanguageLabel1Controller>(LanguageLabel1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
