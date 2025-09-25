import { Test, TestingModule } from '@nestjs/testing';
import { LanguageLabel2Controller } from './language-label_2.controller';
import { LanguageLabel2Service } from './language-label_2.service';

describe('LanguageLabel2Controller', () => {
  let controller: LanguageLabel2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguageLabel2Controller],
      providers: [LanguageLabel2Service],
    }).compile();

    controller = module.get<LanguageLabel2Controller>(LanguageLabel2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
