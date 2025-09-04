import { Test, TestingModule } from '@nestjs/testing';
import { AirportLocationMastersController } from './airport-location-masters.controller';
import { AirportLocationMastersService } from './airport-location-masters.service';

describe('AirportLocationMastersController', () => {
  let controller: AirportLocationMastersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AirportLocationMastersController],
      providers: [AirportLocationMastersService],
    }).compile();

    controller = module.get<AirportLocationMastersController>(AirportLocationMastersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
