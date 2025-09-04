import { Test, TestingModule } from '@nestjs/testing';
import { StoreFavoritesService } from './store-favorites.service';

describe('StoreFavoritesService', () => {
  let service: StoreFavoritesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreFavoritesService],
    }).compile();

    service = module.get<StoreFavoritesService>(StoreFavoritesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
