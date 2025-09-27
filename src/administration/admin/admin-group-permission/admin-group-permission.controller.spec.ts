import { Test, TestingModule } from '@nestjs/testing';
import { AdminGroupPermissionController } from './admin-group-permission.controller';
import { AdminGroupPermissionService } from './admin-group-permission.service';
import { CreateAdminGroupPermissionDto } from './dto/create-admin-group-permission.dto';
import { UpdateAdminGroupPermissionDto } from './dto/update-admin-group-permission.dto';
import { AdminGroupPermission } from './entities/admin-group-permission.entity';

describe('AdminGroupPermissionController', () => {
  let controller: AdminGroupPermissionController;
  let service: AdminGroupPermissionService;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminGroupPermissionController],
      providers: [
        {
          provide: AdminGroupPermissionService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<AdminGroupPermissionController>(AdminGroupPermissionController);
    service = module.get<AdminGroupPermissionService>(AdminGroupPermissionService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create an assignment', async () => {
    const dto: CreateAdminGroupPermissionDto = { groupId: 1, permissionId: 1 };
    const result: AdminGroupPermission = { id: 1, ...dto };
    mockService.create.mockResolvedValue(result);

    await controller.create(dto);
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('should find all assignments', async () => {
    mockService.findAll.mockResolvedValue([]);
    await controller.findAll();
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should find one assignment', async () => {
    const result: AdminGroupPermission = { id: 1, groupId: 1, permissionId: 1 };
    mockService.findOne.mockResolvedValue(result);
    await controller.findOne(1);
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should update an assignment', async () => {
    const dto: UpdateAdminGroupPermissionDto = { groupId: 2 };
    const result: AdminGroupPermission = { id: 1, groupId: 2, permissionId: 1 };
    mockService.update.mockResolvedValue(result);
    await controller.update(1, dto);
    expect(service.update).toHaveBeenCalledWith(1, dto);
  });

  it('should remove an assignment', async () => {
    mockService.remove.mockResolvedValue({ message: 'deleted' });
    await controller.remove(1);
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});