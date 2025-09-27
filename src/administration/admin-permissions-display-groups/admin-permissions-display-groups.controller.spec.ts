import { Test, TestingModule } from '@nestjs/testing';
import { AdminPermissionsDisplayGroupsController } from './admin-permissions-display-groups.controller';
import { AdminPermissionsDisplayGroupsService } from './admin-permissions-display-groups.service';
import { CreateAdminPermissionsDisplayGroupDto } from './dto/create-admin-permissions-display-group.dto';
import { UpdateAdminPermissionsDisplayGroupDto } from './dto/update-admin-permissions-display-group.dto';
import { AdminPermissionDisplayGroups } from './entities/admin-permissions-display-group.entity';

describe('AdminPermissionsDisplayGroupsController', () => {
  let controller: AdminPermissionsDisplayGroupsController;
  let service: AdminPermissionsDisplayGroupsService;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminPermissionsDisplayGroupsController],
      providers: [
        {
          provide: AdminPermissionsDisplayGroupsService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<AdminPermissionsDisplayGroupsController>(AdminPermissionsDisplayGroupsController);
    service = module.get<AdminPermissionsDisplayGroupsService>(AdminPermissionsDisplayGroupsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a display group', async () => {
    const dto: CreateAdminPermissionsDisplayGroupDto = { name: 'Test Group' };
    const result: AdminPermissionDisplayGroups = { id: 1, ...dto, eStatus: 'Active', vDispalyAppType: 'All', eFor: 'General' };
    mockService.create.mockResolvedValue(result);

    await controller.create(dto);
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('should find all display groups', async () => {
    mockService.findAll.mockResolvedValue([]);
    await controller.findAll();
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should find one display group', async () => {
    const result: AdminPermissionDisplayGroups = { id: 1, name: 'Test Group', eStatus: 'Active', vDispalyAppType: 'All', eFor: 'General' };
    mockService.findOne.mockResolvedValue(result);
    await controller.findOne(1);
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should update a display group', async () => {
    const dto: UpdateAdminPermissionsDisplayGroupDto = { name: 'Updated Group' };
    const result: AdminPermissionDisplayGroups = { id: 1, name: 'Updated Group', eStatus: 'Active', vDispalyAppType: 'All', eFor: 'General' };
    mockService.update.mockResolvedValue(result);
    await controller.update(1, dto);
    expect(service.update).toHaveBeenCalledWith(1, dto);
  });

  it('should remove a display group', async () => {
    mockService.remove.mockResolvedValue({ message: 'deleted' });
    await controller.remove(1);
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});