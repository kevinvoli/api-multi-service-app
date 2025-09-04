import { Test, TestingModule } from '@nestjs/testing';
import { UserReferrerTransactionService } from './user-referrer-transaction.service';

describe('UserReferrerTransactionService', () => {
  let service: UserReferrerTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserReferrerTransactionService],
    }).compile();

    service = module.get<UserReferrerTransactionService>(UserReferrerTransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
