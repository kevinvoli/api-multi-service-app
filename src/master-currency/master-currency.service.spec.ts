import { Test, TestingModule } from '@nestjs/testing';
import { MasterCurrencyService } from './master-currency.service';

describe('MasterCurrencyService', () => {
  let service: MasterCurrencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MasterCurrencyService],
    }).compile();

    service = module.get<MasterCurrencyService>(MasterCurrencyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
