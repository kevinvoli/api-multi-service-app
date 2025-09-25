import { Test, TestingModule } from '@nestjs/testing';
import { AdminPermissionsDisplayGroupsService } from './admin-permissions-display-groups.service';

describe('AdminPermissionsDisplayGroupsService', () => {
  let service: AdminPermissionsDisplayGroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminPermissionsDisplayGroupsService],
    }).compile();

    service = module.get<AdminPermissionsDisplayGroupsService>(AdminPermissionsDisplayGroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
