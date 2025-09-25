import { Test, TestingModule } from '@nestjs/testing';
import { AirportsurchargeFareService } from './airportsurcharge-fare.service';

describe('AirportsurchargeFareService', () => {
  let service: AirportsurchargeFareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AirportsurchargeFareService],
    }).compile();

    service = module.get<AirportsurchargeFareService>(AirportsurchargeFareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
