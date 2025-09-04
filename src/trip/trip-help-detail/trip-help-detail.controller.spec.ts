import { Test, TestingModule } from '@nestjs/testing';
import { TripHelpDetailController } from './trip-help-detail.controller';
import { TripHelpDetailService } from './trip-help-detail.service';

describe('TripHelpDetailController', () => {
  let controller: TripHelpDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripHelpDetailController],
      providers: [TripHelpDetailService],
    }).compile();

    controller = module.get<TripHelpDetailController>(TripHelpDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
