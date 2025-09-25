import { Test, TestingModule } from '@nestjs/testing';
import { DriverRewardController } from './driver-reward.controller';
import { DriverRewardService } from './driver-reward.service';

describe('DriverRewardController', () => {
  let controller: DriverRewardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverRewardController],
      providers: [DriverRewardService],
    }).compile();

    controller = module.get<DriverRewardController>(DriverRewardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
