import { Test, TestingModule } from '@nestjs/testing';
import { DriverFavoritesService } from './driver-favorites.service';

describe('DriverFavoritesService', () => {
  let service: DriverFavoritesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverFavoritesService],
    }).compile();

    service = module.get<DriverFavoritesService>(DriverFavoritesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
