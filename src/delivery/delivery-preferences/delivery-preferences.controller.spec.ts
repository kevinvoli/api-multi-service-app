import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryPreferencesController } from './delivery-preferences.controller';
import { DeliveryPreferencesService } from './delivery-preferences.service';

describe('DeliveryPreferencesController', () => {
  let controller: DeliveryPreferencesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryPreferencesController],
      providers: [DeliveryPreferencesService],
    }).compile();

    controller = module.get<DeliveryPreferencesController>(DeliveryPreferencesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
