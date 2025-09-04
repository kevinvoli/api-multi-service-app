import { Test, TestingModule } from '@nestjs/testing';
import { DriverRequestController } from './driver-request.controller';
import { DriverRequestService } from './driver-request.service';

describe('DriverRequestController', () => {
  let controller: DriverRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverRequestController],
      providers: [DriverRequestService],
    }).compile();

    controller = module.get<DriverRequestController>(DriverRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
