import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MasterServiceMenuService } from './master-service-menu.service';
import { MasterServiceMenu } from './entities/master-service-menu.entity';
import { CreateMasterServiceMenuDto } from './dto/create-master-service-menu.dto';
import { UpdateMasterServiceMenuDto } from './dto/update-master-service-menu.dto';
import { NotFoundException } from '@nestjs/common';

const mockMasterServiceMenuRepository = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('MasterServiceMenuService', () => {
  let service: MasterServiceMenuService;
  let repository: Repository<MasterServiceMenu>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MasterServiceMenuService,
        {
          provide: getRepositoryToken(MasterServiceMenu),
          useFactory: mockMasterServiceMenuRepository,
        },
      ],
    }).compile();

    service = module.get<MasterServiceMenuService>(MasterServiceMenuService);
    repository = module.get<Repository<MasterServiceMenu>>(getRepositoryToken(MasterServiceMenu));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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

      jest.spyOn(repository, 'create').mockReturnValue(expectedResult as any);
      jest.spyOn(repository, 'save').mockResolvedValue(expectedResult as any);

      expect(await service.create(createMasterServiceMenuDto)).toEqual(expectedResult);
      expect(repository.create).toHaveBeenCalledWith(createMasterServiceMenuDto);
      expect(repository.save).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of master service menus', async () => {
      const expectedResult = [{ iServiceMenuId: 1, vTitle: 'Test Menu' }];
      jest.spyOn(repository, 'find').mockResolvedValue(expectedResult as any);
      expect(await service.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single master service menu', async () => {
      const id = 1;
      const expectedResult = { iServiceMenuId: id, vTitle: 'Test Menu' };
      jest.spyOn(repository, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await service.findOne(id)).toEqual(expectedResult);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { iServiceMenuId: id } });
    });

    it('should throw a NotFoundException if master service menu not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);
      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a master service menu', async () => {
      const id = 1;
      const updateMasterServiceMenuDto: UpdateMasterServiceMenuDto = { vTitle: 'Updated Menu' };
      const existingMasterServiceMenu = { iServiceMenuId: id, vTitle: 'Test Menu' };

      jest.spyOn(service, 'findOne').mockResolvedValue(existingMasterServiceMenu as any);
      jest.spyOn(repository, 'update').mockResolvedValue({ affected: 1 } as any);

      expect(await service.update(id, updateMasterServiceMenuDto)).toEqual(existingMasterServiceMenu as any);
      expect(repository.update).toHaveBeenCalledWith(id, updateMasterServiceMenuDto);
    });

    it('should throw a NotFoundException if master service menu to update not found', async () => {
        const id = 1;
        const updateMasterServiceMenuDto: UpdateMasterServiceMenuDto = { vTitle: 'Updated Menu' };
        jest.spyOn(service, 'findOne').mockRejectedValue(new NotFoundException());
        await expect(service.update(id, updateMasterServiceMenuDto)).rejects.toThrow(NotFoundException);
      });
  });

  describe('remove', () => {
    it('should remove a master service menu', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 1 } as any);
      await service.remove(id);
      expect(repository.delete).toHaveBeenCalledWith(id);
    });

    it('should throw a NotFoundException if master service menu to remove not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 0 } as any);
      await expect(service.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});