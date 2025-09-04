import { Test, TestingModule } from '@nestjs/testing';
import { AdminLocationsService } from './admin-locations.service';

describe('AdminLocationsService', () => {
  let service: AdminLocationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminLocationsService],
    }).compile();

    service = module.get<AdminLocationsService>(AdminLocationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
