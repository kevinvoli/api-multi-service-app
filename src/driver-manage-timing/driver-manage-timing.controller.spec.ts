import { Test, TestingModule } from '@nestjs/testing';
import { DriverManageTimingController } from './driver-manage-timing.controller';
import { DriverManageTimingService } from './driver-manage-timing.service';

describe('DriverManageTimingController', () => {
  let controller: DriverManageTimingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverManageTimingController],
      providers: [DriverManageTimingService],
    }).compile();

    controller = module.get<DriverManageTimingController>(DriverManageTimingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
