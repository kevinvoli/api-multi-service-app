import { Test, TestingModule } from '@nestjs/testing';
import { DataStorageEngineService } from './data-storage-engine.service';

describe('DataStorageEngineService', () => {
  let service: DataStorageEngineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataStorageEngineService],
    }).compile();

    service = module.get<DataStorageEngineService>(DataStorageEngineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
