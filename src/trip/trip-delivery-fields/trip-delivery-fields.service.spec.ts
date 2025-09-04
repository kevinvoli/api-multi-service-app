import { Test, TestingModule } from '@nestjs/testing';
import { TripDeliveryFieldsService } from './trip-delivery-fields.service';

describe('TripDeliveryFieldsService', () => {
  let service: TripDeliveryFieldsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripDeliveryFieldsService],
    }).compile();

    service = module.get<TripDeliveryFieldsService>(TripDeliveryFieldsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
