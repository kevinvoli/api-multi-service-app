import { Test, TestingModule } from '@nestjs/testing';
import { AdminGroupPermissionController } from './admin-group-permission.controller';
import { AdminGroupPermissionService } from './admin-group-permission.service';

describe('AdminGroupPermissionController', () => {
  let controller: AdminGroupPermissionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminGroupPermissionController],
      providers: [AdminGroupPermissionService],
    }).compile();

    controller = module.get<AdminGroupPermissionController>(AdminGroupPermissionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
