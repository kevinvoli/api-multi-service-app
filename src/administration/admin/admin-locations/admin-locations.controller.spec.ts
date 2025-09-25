import { Test, TestingModule } from '@nestjs/testing';
import { AdminLocationsController } from './admin-locations.controller';
import { AdminLocationsService } from './admin-locations.service';

describe('AdminLocationsController', () => {
  let controller: AdminLocationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminLocationsController],
      providers: [AdminLocationsService],
    }).compile();

    controller = module.get<AdminLocationsController>(AdminLocationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
