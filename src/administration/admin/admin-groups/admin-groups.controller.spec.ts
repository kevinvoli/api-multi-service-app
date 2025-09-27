import { Test, TestingModule } from '@nestjs/testing';
import { AdminGroupsController } from './admin-groups.controller';
import { AdminGroupsService } from './admin-groups.service';
import { CreateAdminGroupDto } from './dto/create-admin-group.dto';
import { UpdateAdminGroupDto } from './dto/update-admin-group.dto';
import { AdminGroups } from './entities/admin-group.entity';

describe('AdminGroupsController', () => {
  let controller: AdminGroupsController;
  let service: AdminGroupsService;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminGroupsController],
      providers: [
        {
          provide: AdminGroupsService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<AdminGroupsController>(AdminGroupsController);
    service = module.get<AdminGroupsService>(AdminGroupsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a group', async () => {
    const dto: CreateAdminGroupDto = { vGroup: 'Test Group' };
    const result: AdminGroups = { iGroupId: 1, ...dto, eStatus: 'Active' };
    mockService.create.mockResolvedValue(result);

    await controller.create(dto);
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('should find all groups', async () => {
    mockService.findAll.mockResolvedValue([]);
    await controller.findAll();
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should find one group', async () => {
    const result: AdminGroups = { iGroupId: 1, vGroup: 'Test Group', eStatus: 'Active' };
    mockService.findOne.mockResolvedValue(result);
    await controller.findOne(1);
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should update a group', async () => {
    const dto: UpdateAdminGroupDto = { vGroup: 'Updated Group' };
    const result: AdminGroups = { iGroupId: 1, vGroup: 'Updated Group', eStatus: 'Active' };
    mockService.update.mockResolvedValue(result);
    await controller.update(1, dto);
    expect(service.update).toHaveBeenCalledWith(1, dto);
  });

  it('should remove a group', async () => {
    mockService.remove.mockResolvedValue({ message: 'deleted' });
    await controller.remove(1);
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});