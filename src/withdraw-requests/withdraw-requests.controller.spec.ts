import { Test, TestingModule } from '@nestjs/testing';
import { WithdrawRequestsController } from './withdraw-requests.controller';
import { WithdrawRequestsService } from './withdraw-requests.service';

describe('WithdrawRequestsController', () => {
  let controller: WithdrawRequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WithdrawRequestsController],
      providers: [WithdrawRequestsService],
    }).compile();

    controller = module.get<WithdrawRequestsController>(WithdrawRequestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
