import { Test, TestingModule } from '@nestjs/testing';
import { AirportsurchargeFareController } from './airportsurcharge-fare.controller';
import { AirportsurchargeFareService } from './airportsurcharge-fare.service';

describe('AirportsurchargeFareController', () => {
  let controller: AirportsurchargeFareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AirportsurchargeFareController],
      providers: [AirportsurchargeFareService],
    }).compile();

    controller = module.get<AirportsurchargeFareController>(AirportsurchargeFareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
