import { Test, TestingModule } from '@nestjs/testing';
import { LangConversionProcessController } from './lang-conversion-process.controller';
import { LangConversionProcessService } from './lang-conversion-process.service';

describe('LangConversionProcessController', () => {
  let controller: LangConversionProcessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LangConversionProcessController],
      providers: [LangConversionProcessService],
    }).compile();

    controller = module.get<LangConversionProcessController>(LangConversionProcessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
