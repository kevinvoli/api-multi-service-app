import { Test, TestingModule } from '@nestjs/testing';
import { AdminGroupsController } from './admin-groups.controller';
import { AdminGroupsService } from './admin-groups.service';

describe('AdminGroupsController', () => {
  let controller: AdminGroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminGroupsController],
      providers: [AdminGroupsService],
    }).compile();

    controller = module.get<AdminGroupsController>(AdminGroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
