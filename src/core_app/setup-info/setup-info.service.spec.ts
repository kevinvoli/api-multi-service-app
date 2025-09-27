import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SetupInfoService } from './setup-info.service';
import { SetupInfo } from './entities/setup-info.entity';
import { CreateSetupInfoDto } from './dto/create-setup-info.dto';
import { UpdateSetupInfoDto } from './dto/update-setup-info.dto';
import { NotFoundException } from '@nestjs/common';

const mockSetupInfoRepository = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('SetupInfoService', () => {
  let service: SetupInfoService;
  let repository: Repository<SetupInfo>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SetupInfoService,
        {
          provide: getRepositoryToken(SetupInfo),
          useFactory: mockSetupInfoRepository,
        },
      ],
    }).compile();

    service = module.get<SetupInfoService>(SetupInfoService);
    repository = module.get<Repository<SetupInfo>>(getRepositoryToken(SetupInfo));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new setup info', async () => {
      const createSetupInfoDto: CreateSetupInfoDto = {
        vName: 'Test Project',
        vProjectName: 'TestProject',
      };
      const expectedResult = { iSetupId: 1, ...createSetupInfoDto, dSetupDate: new Date() };

      jest.spyOn(repository, 'create').mockReturnValue(expectedResult as any);
      jest.spyOn(repository, 'save').mockResolvedValue(expectedResult as any);

      expect(await service.create(createSetupInfoDto)).toEqual(expectedResult);
      expect(repository.create).toHaveBeenCalledWith(createSetupInfoDto);
      expect(repository.save).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of setup infos', async () => {
      const expectedResult = [{ iSetupId: 1, vName: 'Test Project' }];
      jest.spyOn(repository, 'find').mockResolvedValue(expectedResult as any);
      expect(await service.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single setup info', async () => {
      const id = 1;
      const expectedResult = { iSetupId: id, vName: 'Test Project' };
      jest.spyOn(repository, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await service.findOne(id)).toEqual(expectedResult);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { iSetupId: id } });
    });

    it('should throw a NotFoundException if setup info not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);
      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a setup info', async () => {
      const id = 1;
      const updateSetupInfoDto: UpdateSetupInfoDto = { vProjectName: 'UpdatedProject' };
      const existingSetupInfo = { iSetupId: id, vName: 'Test Project' };

      jest.spyOn(service, 'findOne').mockResolvedValue(existingSetupInfo as any);
      jest.spyOn(repository, 'update').mockResolvedValue({ affected: 1 } as any);

      expect(await service.update(id, updateSetupInfoDto)).toEqual(existingSetupInfo as any);
    });

    it('should throw a NotFoundException if setup info to update not found', async () => {
        const id = 1;
        const updateSetupInfoDto: UpdateSetupInfoDto = { vProjectName: 'UpdatedProject' };
        jest.spyOn(repository, 'findOne').mockResolvedValue(null);
        await expect(service.update(id, updateSetupInfoDto)).rejects.toThrow(NotFoundException);
      });
  });

  describe('remove', () => {
    it('should remove a setup info', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 1 } as any);
      await service.remove(id);
      expect(repository.delete).toHaveBeenCalledWith(id);
    });

    it('should throw a NotFoundException if setup info to remove not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 0 } as any);
      await expect(service.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});