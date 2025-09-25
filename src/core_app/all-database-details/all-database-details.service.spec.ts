import { Test, TestingModule } from '@nestjs/testing';
import { AllDatabaseDetailsService } from './all-database-details.service';

describe('AllDatabaseDetailsService', () => {
  let service: AllDatabaseDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllDatabaseDetailsService],
    }).compile();

    service = module.get<AllDatabaseDetailsService>(AllDatabaseDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
