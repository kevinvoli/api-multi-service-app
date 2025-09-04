import { Test, TestingModule } from '@nestjs/testing';
import { LanguageLabelController } from './language-label.controller';
import { LanguageLabelService } from './language-label.service';

describe('LanguageLabelController', () => {
  let controller: LanguageLabelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguageLabelController],
      providers: [LanguageLabelService],
    }).compile();

    controller = module.get<LanguageLabelController>(LanguageLabelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
