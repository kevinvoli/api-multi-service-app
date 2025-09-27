import { Test, TestingModule } from '@nestjs/testing';
import { AdministratorsController } from './administrators.controller';
import { AdministratorsService } from './administrators.service';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';

describe('AdministratorsController', () => {
  let controller: AdministratorsController;
  let service: AdministratorsService;

  // This mock should return data without the password, just like the real service
  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdministratorsController],
      providers: [
        {
          provide: AdministratorsService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<AdministratorsController>(AdministratorsController);
    service = module.get<AdministratorsService>(AdministratorsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create an administrator', async () => {
    const dto: CreateAdministratorDto = {
        vFirstName: 'John',
        vLastName: 'Doe',
        vEmail: 'john@doe.com',
        vPassword: 'password123',
        vContactNo: '123',
        vCode: '123',
        vCountry: 'USA',
        vState: 'CA',
        vCity: 'LA',
        vAddress: '123 Main St',
        vAddressLat: '34.0522',
        vAddressLong: '-118.2437',
        fHotelServiceCharge: 0,
        vPaymentEmail: 'pay@doe.com',
        vBankAccountHolderName: 'John Doe',
        vAccountNumber: '12345',
        vBankName: 'Bank',
        vBankLocation: 'LA',
        vBicSwiftCode: 'BOFAUS3N',
    };

    const { vPassword, ...result } = dto; // Create the expected result without the password
    mockService.create.mockResolvedValue(result);

    await controller.create(dto);
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('should find all administrators', async () => {
    mockService.findAll.mockResolvedValue([]);
    await controller.findAll();
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should find one administrator', async () => {
    const result = { iAdminId: 1, vFirstName: 'John' };
    mockService.findOne.mockResolvedValue(result);
    await controller.findOne(1);
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should update an administrator', async () => {
    const dto: UpdateAdministratorDto = { vFirstName: 'Jane' };
    const result = { iAdminId: 1, vFirstName: 'Jane' };
    mockService.update.mockResolvedValue(result);
    await controller.update(1, dto);
    expect(service.update).toHaveBeenCalledWith(1, dto);
  });

  it('should remove an administrator', async () => {
    mockService.remove.mockResolvedValue({ message: 'deleted' });
    await controller.remove(1);
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});