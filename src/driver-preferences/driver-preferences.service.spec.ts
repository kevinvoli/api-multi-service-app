import { Test, TestingModule } from '@nestjs/testing';
import { DriverPreferencesService } from './driver-preferences.service';

describe('DriverPreferencesService', () => {
  let service: DriverPreferencesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverPreferencesService],
    }).compile();

    service = module.get<DriverPreferencesService>(DriverPreferencesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
