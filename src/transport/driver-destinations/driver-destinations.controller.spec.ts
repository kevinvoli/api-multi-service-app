import { Test, TestingModule } from '@nestjs/testing';
import { DriverDestinationsController } from './driver-destinations.controller';
import { DriverDestinationsService } from './driver-destinations.service';

describe('DriverDestinationsController', () => {
  let controller: DriverDestinationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverDestinationsController],
      providers: [DriverDestinationsService],
    }).compile();

    controller = module.get<DriverDestinationsController>(DriverDestinationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
