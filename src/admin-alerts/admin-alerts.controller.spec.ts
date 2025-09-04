import { Test, TestingModule } from '@nestjs/testing';
import { AdminAlertsController } from './admin-alerts.controller';
import { AdminAlertsService } from './admin-alerts.service';

describe('AdminAlertsController', () => {
  let controller: AdminAlertsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminAlertsController],
      providers: [AdminAlertsService],
    }).compile();

    controller = module.get<AdminAlertsController>(AdminAlertsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
