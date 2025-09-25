import { Test, TestingModule } from '@nestjs/testing';
import { CabBookingService } from './cab-booking.service';

describe('CabBookingService', () => {
  let service: CabBookingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CabBookingService],
    }).compile();

    service = module.get<CabBookingService>(CabBookingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
