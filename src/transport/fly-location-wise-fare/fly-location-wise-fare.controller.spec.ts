import { Test, TestingModule } from '@nestjs/testing';
import { FlyLocationWiseFareController } from './fly-location-wise-fare.controller';
import { FlyLocationWiseFareService } from './fly-location-wise-fare.service';

describe('FlyLocationWiseFareController', () => {
  let controller: FlyLocationWiseFareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlyLocationWiseFareController],
      providers: [FlyLocationWiseFareService],
    }).compile();

    controller = module.get<FlyLocationWiseFareController>(FlyLocationWiseFareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
