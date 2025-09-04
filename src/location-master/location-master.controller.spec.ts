import { Test, TestingModule } from '@nestjs/testing';
import { LocationMasterController } from './location-master.controller';
import { LocationMasterService } from './location-master.service';

describe('LocationMasterController', () => {
  let controller: LocationMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationMasterController],
      providers: [LocationMasterService],
    }).compile();

    controller = module.get<LocationMasterController>(LocationMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
