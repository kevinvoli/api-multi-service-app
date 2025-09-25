import { Test, TestingModule } from '@nestjs/testing';
import { OdaLocationsStatusController } from './oda-locations-status.controller';
import { OdaLocationsStatusService } from './oda-locations-status.service';

describe('OdaLocationsStatusController', () => {
  let controller: OdaLocationsStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OdaLocationsStatusController],
      providers: [OdaLocationsStatusService],
    }).compile();

    controller = module.get<OdaLocationsStatusController>(OdaLocationsStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
