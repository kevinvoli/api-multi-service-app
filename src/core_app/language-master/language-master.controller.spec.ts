import { Test, TestingModule } from '@nestjs/testing';
import { LanguageMasterController } from './language-master.controller';
import { LanguageMasterService } from './language-master.service';

describe('LanguageMasterController', () => {
  let controller: LanguageMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguageMasterController],
      providers: [LanguageMasterService],
    }).compile();

    controller = module.get<LanguageMasterController>(LanguageMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
