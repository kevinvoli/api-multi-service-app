import { Test, TestingModule } from '@nestjs/testing';
import { HelpDetailController } from './help-detail.controller';
import { HelpDetailService } from './help-detail.service';

describe('HelpDetailController', () => {
  let controller: HelpDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelpDetailController],
      providers: [HelpDetailService],
    }).compile();

    controller = module.get<HelpDetailController>(HelpDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
