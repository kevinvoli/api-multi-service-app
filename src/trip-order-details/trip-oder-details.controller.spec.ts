import { Test, TestingModule } from '@nestjs/testing';
import { TripOderDetailsController } from './trip-oder-details.controller';
import { TripOderDetailsService } from './trip-oder-details.service';

describe('TripOderDetailsController', () => {
  let controller: TripOderDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripOderDetailsController],
      providers: [TripOderDetailsService],
    }).compile();

    controller = module.get<TripOderDetailsController>(TripOderDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
