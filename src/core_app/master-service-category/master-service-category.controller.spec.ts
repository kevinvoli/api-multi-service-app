import { Test, TestingModule } from '@nestjs/testing';
import { MasterServiceCategoryController } from './master-service-category.controller';
import { MasterServiceCategoryService } from './master-service-category.service';
import { CreateMasterServiceCategoryDto } from './dto/create-master-service-category.dto';
import { UpdateMasterServiceCategoryDto } from './dto/update-master-service-category.dto';

const mockMasterServiceCategoryService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('MasterServiceCategoryController', () => {
  let controller: MasterServiceCategoryController;
  let service: MasterServiceCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MasterServiceCategoryController],
      providers: [
        {
          provide: MasterServiceCategoryService,
          useValue: mockMasterServiceCategoryService,
        },
      ],
    }).compile();

    controller = module.get<MasterServiceCategoryController>(MasterServiceCategoryController);
    service = module.get<MasterServiceCategoryService>(MasterServiceCategoryService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new master service category', async () => {
      const createMasterServiceCategoryDto: CreateMasterServiceCategoryDto = {
        vCategoryName: 'Test Category',
        eType: 'Ride',
        eStatus: 'Active',
        vIconImage: 'test.png',
        vIconImage1: 'test1.png',
        vIconImage2: 'test2.png',
        vBgImage: 'bg.png',
        vTextColor: '#FFFFFF',
        vBgColor: '#000000',
        iDisplayOrder: 1,
        iListMaxCount: 10,
      };
      const expectedResult = { iMasterServiceCategoryId: 1, ...createMasterServiceCategoryDto };
      jest.spyOn(service, 'create').mockResolvedValue(expectedResult as any);

      expect(await controller.create(createMasterServiceCategoryDto)).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createMasterServiceCategoryDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of master service categories', async () => {
      const expectedResult = [{ iMasterServiceCategoryId: 1, vCategoryName: 'Test Category' }];
      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult as any);
      expect(await controller.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single master service category', async () => {
      const id = '1';
      const expectedResult = { iMasterServiceCategoryId: 1, vCategoryName: 'Test Category' };
      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await controller.findOne(id)).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('update', () => {
    it('should update a master service category', async () => {
      const id = '1';
      const updateMasterServiceCategoryDto: UpdateMasterServiceCategoryDto = { vCategoryName: 'Updated Category' };
      const expectedResult = { iMasterServiceCategoryId: 1, vCategoryName: 'Updated Category' };
      jest.spyOn(service, 'update').mockResolvedValue(expectedResult as any);

      expect(await controller.update(id, updateMasterServiceCategoryDto)).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(+id, updateMasterServiceCategoryDto);
    });
  });

  describe('remove', () => {
    it('should remove a master service category', async () => {
      const id = '1';
      jest.spyOn(service, 'remove').mockResolvedValue(undefined);
      await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(+id);
    });
  });
});