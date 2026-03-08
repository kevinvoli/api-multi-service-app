import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AdminPermissionsDisplayGroupsController } from './admin-permissions-display-groups.controller';
import { AdminPermissionsDisplayGroupsService } from './admin-permissions-display-groups.service';
import { AdminPermissionDisplayGroups } from './entities/admin-permissions-display-group.entity';

const mockRepo = {
  find: jest.fn().mockResolvedValue([]),
  findOne: jest.fn().mockResolvedValue(null),
  findOneBy: jest.fn().mockResolvedValue(null),
  create: jest.fn().mockReturnValue({}),
  save: jest.fn().mockResolvedValue({}),
  update: jest.fn().mockResolvedValue({ affected: 1 }),
  delete: jest.fn().mockResolvedValue({ affected: 1 }),
  createQueryBuilder: jest.fn().mockReturnValue({
    where: jest.fn().mockReturnThis(),
    andWhere: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    orderBy: jest.fn().mockReturnThis(),
    skip: jest.fn().mockReturnThis(),
    take: jest.fn().mockReturnThis(),
    getMany: jest.fn().mockResolvedValue([]),
    getOne: jest.fn().mockResolvedValue(null),
    getManyAndCount: jest.fn().mockResolvedValue([[], 0]),
    getCount: jest.fn().mockResolvedValue(0),
  }),
};

describe('AdminPermissionsDisplayGroupsController', () => {
  let controller: AdminPermissionsDisplayGroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminPermissionsDisplayGroupsController],
      providers: [
        AdminPermissionsDisplayGroupsService,
        { provide: getRepositoryToken(AdminPermissionDisplayGroups), useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<AdminPermissionsDisplayGroupsController>(AdminPermissionsDisplayGroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
