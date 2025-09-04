import { Test, TestingModule } from '@nestjs/testing';
import { UserPaymentInfoController } from './user-payment-info.controller';
import { UserPaymentInfoService } from './user-payment-info.service';

describe('UserPaymentInfoController', () => {
  let controller: UserPaymentInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPaymentInfoController],
      providers: [UserPaymentInfoService],
    }).compile();

    controller = module.get<UserPaymentInfoController>(UserPaymentInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
