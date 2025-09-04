import { Test, TestingModule } from '@nestjs/testing';
import { MaskingNumbersController } from './masking-numbers.controller';
import { MaskingNumbersService } from './masking-numbers.service';

describe('MaskingNumbersController', () => {
  let controller: MaskingNumbersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaskingNumbersController],
      providers: [MaskingNumbersService],
    }).compile();

    controller = module.get<MaskingNumbersController>(MaskingNumbersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
