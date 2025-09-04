import { Test, TestingModule } from '@nestjs/testing';
import { DriverPreferencesController } from './driver-preferences.controller';
import { DriverPreferencesService } from './driver-preferences.service';

describe('DriverPreferencesController', () => {
  let controller: DriverPreferencesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverPreferencesController],
      providers: [DriverPreferencesService],
    }).compile();

    controller = module.get<DriverPreferencesController>(DriverPreferencesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
