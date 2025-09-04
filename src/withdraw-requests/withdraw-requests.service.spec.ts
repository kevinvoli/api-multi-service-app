import { Test, TestingModule } from '@nestjs/testing';
import { WithdrawRequestsService } from './withdraw-requests.service';

describe('WithdrawRequestsService', () => {
  let service: WithdrawRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WithdrawRequestsService],
    }).compile();

    service = module.get<WithdrawRequestsService>(WithdrawRequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
