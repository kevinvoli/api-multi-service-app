import { Test, TestingModule } from '@nestjs/testing';
import { MasterCurrencyController } from './master-currency.controller';
import { MasterCurrencyService } from './master-currency.service';

describe('MasterCurrencyController', () => {
  let controller: MasterCurrencyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MasterCurrencyController],
      providers: [MasterCurrencyService],
    }).compile();

    controller = module.get<MasterCurrencyController>(MasterCurrencyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
