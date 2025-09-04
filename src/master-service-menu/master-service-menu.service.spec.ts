import { Test, TestingModule } from '@nestjs/testing';
import { MasterServiceMenuService } from './master-service-menu.service';

describe('MasterServiceMenuService', () => {
  let service: MasterServiceMenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MasterServiceMenuService],
    }).compile();

    service = module.get<MasterServiceMenuService>(MasterServiceMenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
