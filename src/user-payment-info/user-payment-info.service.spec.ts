import { Test, TestingModule } from '@nestjs/testing';
import { UserPaymentInfoService } from './user-payment-info.service';

describe('UserPaymentInfoService', () => {
  let service: UserPaymentInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPaymentInfoService],
    }).compile();

    service = module.get<UserPaymentInfoService>(UserPaymentInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
