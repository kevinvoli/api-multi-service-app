import { Test, TestingModule } from '@nestjs/testing';
import { AdminAlertsController } from './admin-alerts.controller';
import { AdminAlertsService } from './admin-alerts.service';
import { CreateAdminAlertDto } from './dto/create-admin-alert.dto';
import { UpdateAdminAlertDto } from './dto/update-admin-alert.dto';
import { AdminAlerts } from './entities/admin-alert.entity';

describe('AdminAlertsController', () => {
  let controller: AdminAlertsController;
  let service: AdminAlertsService;

  const mockAdminAlertsService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminAlertsController],
      providers: [
        {
          provide: AdminAlertsService,
          useValue: mockAdminAlertsService,
        },
      ],
    }).compile();

    controller = module.get<AdminAlertsController>(AdminAlertsController);
    service = module.get<AdminAlertsService>(AdminAlertsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create an alert', async () => {
    const dto: CreateAdminAlertDto = {
      tAlertText: 'Test Alert',
      iCompanyId: 1,
      iDriverId: 1,
      dDate: new Date(),
      eStatus: 'Unread',
    };
    const result: AdminAlerts = { iAlertId: 1, ...dto };
    mockAdminAlertsService.create.mockResolvedValue(result);

    await controller.create(dto);
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('should find all alerts', async () => {
    mockAdminAlertsService.findAll.mockResolvedValue([]);
    await controller.findAll();
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should find one alert', async () => {
    const result: AdminAlerts = { iAlertId: 1, tAlertText: 'Test', iCompanyId: 1, iDriverId: 1, dDate: new Date(), eStatus: 'Unread' };
    mockAdminAlertsService.findOne.mockResolvedValue(result);
    await controller.findOne(1);
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should update an alert', async () => {
    const dto: UpdateAdminAlertDto = { tAlertText: 'Updated Alert' };
    const result: AdminAlerts = { iAlertId: 1, tAlertText: 'Updated', iCompanyId: 1, iDriverId: 1, dDate: new Date(), eStatus: 'Unread' };
    mockAdminAlertsService.update.mockResolvedValue(result);
    await controller.update(1, dto);
    expect(service.update).toHaveBeenCalledWith(1, dto);
  });

  it('should remove an alert', async () => {
    mockAdminAlertsService.remove.mockResolvedValue({ message: 'deleted' });
    await controller.remove(1);
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});