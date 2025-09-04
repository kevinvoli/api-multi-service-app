import { Test, TestingModule } from '@nestjs/testing';
import { WalletMoneyReferrerEmailController } from './wallet-money-referrer-email.controller';
import { WalletMoneyReferrerEmailService } from './wallet-money-referrer-email.service';

describe('WalletMoneyReferrerEmailController', () => {
  let controller: WalletMoneyReferrerEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WalletMoneyReferrerEmailController],
      providers: [WalletMoneyReferrerEmailService],
    }).compile();

    controller = module.get<WalletMoneyReferrerEmailController>(WalletMoneyReferrerEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
