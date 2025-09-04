import { Test, TestingModule } from '@nestjs/testing';
import { AdminAlertsService } from './admin-alerts.service';

describe('AdminAlertsService', () => {
  let service: AdminAlertsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminAlertsService],
    }).compile();

    service = module.get<AdminAlertsService>(AdminAlertsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
