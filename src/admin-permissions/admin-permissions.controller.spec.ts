import { Test, TestingModule } from '@nestjs/testing';
import { AdminPermissionsController } from './admin-permissions.controller';
import { AdminPermissionsService } from './admin-permissions.service';

describe('AdminPermissionsController', () => {
  let controller: AdminPermissionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminPermissionsController],
      providers: [AdminPermissionsService],
    }).compile();

    controller = module.get<AdminPermissionsController>(AdminPermissionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
