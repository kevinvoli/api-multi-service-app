import { Test, TestingModule } from '@nestjs/testing';
import { EmergencyCantactDataService } from './emergency-cantact-data.service';

describe('EmergencyCantactDataService', () => {
  let service: EmergencyCantactDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmergencyCantactDataService],
    }).compile();

    service = module.get<EmergencyCantactDataService>(EmergencyCantactDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
