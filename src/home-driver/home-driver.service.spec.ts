import { Test, TestingModule } from '@nestjs/testing';
import { HomeDriverService } from './home-driver.service';

describe('HomeDriverService', () => {
  let service: HomeDriverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeDriverService],
    }).compile();

    service = module.get<HomeDriverService>(HomeDriverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
