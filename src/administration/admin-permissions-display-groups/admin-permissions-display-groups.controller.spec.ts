import { Test, TestingModule } from '@nestjs/testing';
import { AdminPermissionsDisplayGroupsController } from './admin-permissions-display-groups.controller';
import { AdminPermissionsDisplayGroupsService } from './admin-permissions-display-groups.service';

describe('AdminPermissionsDisplayGroupsController', () => {
  let controller: AdminPermissionsDisplayGroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminPermissionsDisplayGroupsController],
      providers: [AdminPermissionsDisplayGroupsService],
    }).compile();

    controller = module.get<AdminPermissionsDisplayGroupsController>(AdminPermissionsDisplayGroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
