import { Test, TestingModule } from '@nestjs/testing';
import { LanguagePageDetailsController } from './language-page-details.controller';
import { LanguagePageDetailsService } from './language-page-details.service';

describe('LanguagePageDetailsController', () => {
  let controller: LanguagePageDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguagePageDetailsController],
      providers: [LanguagePageDetailsService],
    }).compile();

    controller = module.get<LanguagePageDetailsController>(LanguagePageDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
