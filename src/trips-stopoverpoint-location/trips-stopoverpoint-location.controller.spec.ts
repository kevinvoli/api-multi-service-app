import { Test, TestingModule } from '@nestjs/testing';
import { TripsStopoverpointLocationController } from './trips-stopoverpoint-location.controller';
import { TripsStopoverpointLocationService } from './trips-stopoverpoint-location.service';

describe('TripsStopoverpointLocationController', () => {
  let controller: TripsStopoverpointLocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripsStopoverpointLocationController],
      providers: [TripsStopoverpointLocationService],
    }).compile();

    controller = module.get<TripsStopoverpointLocationController>(TripsStopoverpointLocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
