import { Test, TestingModule } from '@nestjs/testing';
import { AdminLocationsController } from './admin-locations.controller';
import { AdminLocationsService } from './admin-locations.service';
import { CreateAdminLocationDto } from './dto/create-admin-location.dto';
import { UpdateAdminLocationDto } from './dto/update-admin-location.dto';
import { AdminLocations } from './entities/admin-location.entity';

describe('AdminLocationsController', () => {
  let controller: AdminLocationsController;
  let service: AdminLocationsService;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminLocationsController],
      providers: [
        {
          provide: AdminLocationsService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<AdminLocationsController>(AdminLocationsController);
    service = module.get<AdminLocationsService>(AdminLocationsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create an assignment', async () => {
    const dto: CreateAdminLocationDto = { adminId: 1, locationId: 1 };
    const result: AdminLocations = { id: 1, ...dto };
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
    const result: AdminLocations = { id: 1, adminId: 1, locationId: 1 };
    mockService.findOne.mockResolvedValue(result);
    await controller.findOne(1);
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should update an assignment', async () => {
    const dto: UpdateAdminLocationDto = { adminId: 2 };
    const result: AdminLocations = { id: 1, adminId: 2, locationId: 1 };
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