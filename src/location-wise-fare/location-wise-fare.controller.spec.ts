import { Test, TestingModule } from '@nestjs/testing';
import { LocationWiseFareController } from './location-wise-fare.controller';
import { LocationWiseFareService } from './location-wise-fare.service';

describe('LocationWiseFareController', () => {
  let controller: LocationWiseFareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationWiseFareController],
      providers: [LocationWiseFareService],
    }).compile();

    controller = module.get<LocationWiseFareController>(LocationWiseFareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
