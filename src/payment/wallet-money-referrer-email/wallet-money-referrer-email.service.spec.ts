import { Test, TestingModule } from '@nestjs/testing';
import { WalletMoneyReferrerEmailService } from './wallet-money-referrer-email.service';

describe('WalletMoneyReferrerEmailService', () => {
  let service: WalletMoneyReferrerEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WalletMoneyReferrerEmailService],
    }).compile();

    service = module.get<WalletMoneyReferrerEmailService>(WalletMoneyReferrerEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
