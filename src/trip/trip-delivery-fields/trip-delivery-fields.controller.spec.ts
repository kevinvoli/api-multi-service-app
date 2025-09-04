import { Test, TestingModule } from '@nestjs/testing';
import { TripDeliveryFieldsController } from './trip-delivery-fields.controller';
import { TripDeliveryFieldsService } from './trip-delivery-fields.service';

describe('TripDeliveryFieldsController', () => {
  let controller: TripDeliveryFieldsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripDeliveryFieldsController],
      providers: [TripDeliveryFieldsService],
    }).compile();

    controller = module.get<TripDeliveryFieldsController>(TripDeliveryFieldsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
