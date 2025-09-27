import { Test, TestingModule } from '@nestjs/testing';
import { AdminPermissionsController } from './admin-permissions.controller';
import { AdminPermissionsService } from './admin-permissions.service';
import { CreateAdminPermissionDto } from './dto/create-admin-permission.dto';
import { UpdateAdminPermissionDto } from './dto/update-admin-permission.dto';
import { AdminPermissions } from './entities/admin-permission.entity';

describe('AdminPermissionsController', () => {
  let controller: AdminPermissionsController;
  let service: AdminPermissionsService;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminPermissionsController],
      providers: [
        {
          provide: AdminPermissionsService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<AdminPermissionsController>(AdminPermissionsController);
    service = module.get<AdminPermissionsService>(AdminPermissionsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a permission', async () => {
    const dto: CreateAdminPermissionDto = {
      permissionName: 'test_permission',
      displayGroupId: 1,
      displayOrder: 1,
    };
    const result: AdminPermissions = { id: 1, ...dto, status: 'Active', vDispalyAppType: 'All', eFor: 'General' };
    mockService.create.mockResolvedValue(result);

    await controller.create(dto);
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('should find all permissions', async () => {
    mockService.findAll.mockResolvedValue([]);
    await controller.findAll();
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should find one permission', async () => {
    const result: AdminPermissions = { id: 1, permissionName: 'test', displayGroupId: 1, displayOrder: 1, status: 'Active', vDispalyAppType: 'All', eFor: 'General' };
    mockService.findOne.mockResolvedValue(result);
    await controller.findOne(1);
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should update a permission', async () => {
    const dto: UpdateAdminPermissionDto = { permissionName: 'updated_permission' };
    const result: AdminPermissions = { id: 1, permissionName: 'updated_permission', displayGroupId: 1, displayOrder: 1, status: 'Active', vDispalyAppType: 'All', eFor: 'General' };
    mockService.update.mockResolvedValue(result);
    await controller.update(1, dto);
    expect(service.update).toHaveBeenCalledWith(1, dto);
  });

  it('should remove a permission', async () => {
    mockService.remove.mockResolvedValue({ message: 'deleted' });
    await controller.remove(1);
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});