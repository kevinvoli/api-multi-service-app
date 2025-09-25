import { Test, TestingModule } from '@nestjs/testing';
import { EmergencyCantactDataController } from './emergency-cantact-data.controller';
import { EmergencyCantactDataService } from './emergency-cantact-data.service';

describe('EmergencyCantactDataController', () => {
  let controller: EmergencyCantactDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmergencyCantactDataController],
      providers: [EmergencyCantactDataService],
    }).compile();

    controller = module.get<EmergencyCantactDataController>(EmergencyCantactDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
