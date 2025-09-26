import { Test, TestingModule } from '@nestjs/testing';
import { MasterServiceMenuController } from './master-service-menu.controller';
import { MasterServiceMenuService } from './master-service-menu.service';
import { CreateMasterServiceMenuDto } from './dto/create-master-service-menu.dto';
import { UpdateMasterServiceMenuDto } from './dto/update-master-service-menu.dto';

const mockMasterServiceMenuService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('MasterServiceMenuController', () => {
  let controller: MasterServiceMenuController;
  let service: MasterServiceMenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MasterServiceMenuController],
      providers: [
        {
          provide: MasterServiceMenuService,
          useValue: mockMasterServiceMenuService,
        },
      ],
    }).compile();

    controller = module.get<MasterServiceMenuController>(MasterServiceMenuController);
    service = module.get<MasterServiceMenuService>(MasterServiceMenuService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new master service menu', async () => {
      const createMasterServiceMenuDto: CreateMasterServiceMenuDto = {
        vTitle: 'Test Menu',
        iParentId: 0,
        eType: 'Ride',
        iServiceId: 1,
        eStatus: 'Active',
        iDisplayOrder: 1,
      };
      const expectedResult = { iServiceMenuId: 1, ...createMasterServiceMenuDto };
      jest.spyOn(service, 'create').mockResolvedValue(expectedResult as any);

      expect(await controller.create(createMasterServiceMenuDto)).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createMasterServiceMenuDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of master service menus', async () => {
      const expectedResult = [{ iServiceMenuId: 1, vTitle: 'Test Menu' }];
      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult as any);
      expect(await controller.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single master service menu', async () => {
      const id = '1';
      const expectedResult = { iServiceMenuId: 1, vTitle: 'Test Menu' };
      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await controller.findOne(id)).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('update', () => {
    it('should update a master service menu', async () => {
      const id = '1';
      const updateMasterServiceMenuDto: UpdateMasterServiceMenuDto = { vTitle: 'Updated Menu' };
      const expectedResult = { iServiceMenuId: 1, vTitle: 'Updated Menu' };
      jest.spyOn(service, 'update').mockResolvedValue(expectedResult as any);

      expect(await controller.update(id, updateMasterServiceMenuDto)).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(+id, updateMasterServiceMenuDto);
    });
  });

  describe('remove', () => {
    it('should remove a master service menu', async () => {
      const id = '1';
      jest.spyOn(service, 'remove').mockResolvedValue(undefined);
      await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(+id);
    });
  });
});