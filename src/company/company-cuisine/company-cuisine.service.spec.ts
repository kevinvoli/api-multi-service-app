import { Test, TestingModule } from '@nestjs/testing';
import { CompanyCuisineService } from './company-cuisine.service';

describe('CompanyCuisineService', () => {
  let service: CompanyCuisineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyCuisineService],
    }).compile();

    service = module.get<CompanyCuisineService>(CompanyCuisineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
