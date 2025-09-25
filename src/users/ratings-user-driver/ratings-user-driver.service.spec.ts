import { Test, TestingModule } from '@nestjs/testing';
import { RatingsUserDriverService } from './ratings-user-driver.service';

describe('RatingsUserDriverService', () => {
  let service: RatingsUserDriverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RatingsUserDriverService],
    }).compile();

    service = module.get<RatingsUserDriverService>(RatingsUserDriverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
