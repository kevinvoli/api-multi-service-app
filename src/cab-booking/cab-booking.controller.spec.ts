import { Test, TestingModule } from '@nestjs/testing';
import { CabBookingController } from './cab-booking.controller';
import { CabBookingService } from './cab-booking.service';

describe('CabBookingController', () => {
  let controller: CabBookingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CabBookingController],
      providers: [CabBookingService],
    }).compile();

    controller = module.get<CabBookingController>(CabBookingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
