import { Test, TestingModule } from '@nestjs/testing';
import { DataStorageEngineController } from './data-storage-engine.controller';
import { DataStorageEngineService } from './data-storage-engine.service';

describe('DataStorageEngineController', () => {
  let controller: DataStorageEngineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataStorageEngineController],
      providers: [DataStorageEngineService],
    }).compile();

    controller = module.get<DataStorageEngineController>(DataStorageEngineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
