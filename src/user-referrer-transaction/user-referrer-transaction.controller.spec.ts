import { Test, TestingModule } from '@nestjs/testing';
import { UserReferrerTransactionController } from './user-referrer-transaction.controller';
import { UserReferrerTransactionService } from './user-referrer-transaction.service';

describe('UserReferrerTransactionController', () => {
  let controller: UserReferrerTransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserReferrerTransactionController],
      providers: [UserReferrerTransactionService],
    }).compile();

    controller = module.get<UserReferrerTransactionController>(UserReferrerTransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
