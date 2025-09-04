import { Test, TestingModule } from '@nestjs/testing';
import { AdminGroupPermissionService } from './admin-group-permission.service';

describe('AdminGroupPermissionService', () => {
  let service: AdminGroupPermissionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminGroupPermissionService],
    }).compile();

    service = module.get<AdminGroupPermissionService>(AdminGroupPermissionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
