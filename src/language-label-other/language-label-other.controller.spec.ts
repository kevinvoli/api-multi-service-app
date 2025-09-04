import { Test, TestingModule } from '@nestjs/testing';
import { LanguageLabelOtherController } from './language-label-other.controller';
import { LanguageLabelOtherService } from './language-label-other.service';

describe('LanguageLabelOtherController', () => {
  let controller: LanguageLabelOtherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguageLabelOtherController],
      providers: [LanguageLabelOtherService],
    }).compile();

    controller = module.get<LanguageLabelOtherController>(LanguageLabelOtherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
