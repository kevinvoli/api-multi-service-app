import { Test, TestingModule } from '@nestjs/testing';
import { ServiceCategoriesController } from './service-categories.controller';
import { ServiceCategoriesService } from './service-categories.service';
import { CreateServiceCategoryDto } from './dto/create-service-category.dto';
import { UpdateServiceCategoryDto } from './dto/update-service-category.dto';

const mockServiceCategoriesService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('ServiceCategoriesController', () => {
  let controller: ServiceCategoriesController;
  let service: ServiceCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceCategoriesController],
      providers: [
        {
          provide: ServiceCategoriesService,
          useValue: mockServiceCategoriesService,
        },
      ],
    }).compile();

    controller = module.get<ServiceCategoriesController>(ServiceCategoriesController);
    service = module.get<ServiceCategoriesService>(ServiceCategoriesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new service category', async () => {
      const createServiceCategoryDto: CreateServiceCategoryDto = {
        vService: 'Test Service',
        vServiceNameEn: 'Test Service EN',
        vServiceNameFr: 'Test Service FR',
        iDisplayOrder: 1,
        vImage: 'test.png',
        tDescription: 'Test Description',
        eShowTerms: 'No',
        eProofUpload: 'No',
        eStatus: 'Active',
        eType: 'separate',
        prescriptionRequired: 'No',
        tProofNote: '',
        tProofNoteDriver: '',
        tProofNoteStore: '',
        eOtpCodeEnable: 'No',
      };
      const expectedResult = { iServiceId: 1, ...createServiceCategoryDto };
      jest.spyOn(service, 'create').mockResolvedValue(expectedResult as any);

      expect(await controller.create(createServiceCategoryDto)).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createServiceCategoryDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of service categories', async () => {
      const expectedResult = [{ iServiceId: 1, vService: 'Test Service' }];
      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult as any);
      expect(await controller.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single service category', async () => {
      const id = '1';
      const expectedResult = { iServiceId: 1, vService: 'Test Service' };
      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await controller.findOne(id)).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('update', () => {
    it('should update a service category', async () => {
      const id = '1';
      const updateServiceCategoryDto: UpdateServiceCategoryDto = { vService: 'Updated Service' };
      const expectedResult = { iServiceId: 1, vService: 'Updated Service' };
      jest.spyOn(service, 'update').mockResolvedValue(expectedResult as any);

      expect(await controller.update(id, updateServiceCategoryDto)).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(+id, updateServiceCategoryDto);
    });
  });

  describe('remove', () => {
    it('should remove a service category', async () => {
      const id = '1';
      jest.spyOn(service, 'remove').mockResolvedValue(undefined);
      await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(+id);
    });
  });
});