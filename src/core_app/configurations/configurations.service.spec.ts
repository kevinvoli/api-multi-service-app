import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigurationsService } from './configurations.service';
import { Configurations } from './entities/configuration.entity';
import { CreateConfigurationDto } from './dto/create-configuration.dto';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';
import { NotFoundException } from '@nestjs/common';

const mockConfigurationRepository = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('ConfigurationsService', () => {
  let service: ConfigurationsService;
  let repository: Repository<Configurations>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ConfigurationsService,
        {
          provide: getRepositoryToken(Configurations),
          useFactory: mockConfigurationRepository,
        },
      ],
    }).compile();

    service = module.get<ConfigurationsService>(ConfigurationsService);
    repository = module.get<Repository<Configurations>>(getRepositoryToken(Configurations));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new configuration', async () => {
      const createConfigurationDto: CreateConfigurationDto = {
        vName: 'TEST_SETTING',
        vValue: 'Test Value',
        vOrder: 1,
        eStatus: 'Active',
        tDescription: 'Test Description',
        eFor: 'General',
        eType: 'General',
        tHelp: 'Test Help',
        eInputType: 'Text',
        eZeroAllowed: 'No',
        eSpaceAllowed: 'Yes',
        eDoubleValueAllowed: 'No',
        tSelectVal: '',
        eAdminDisplay: 'Yes',
        eRequireField: 'No',
        eConfigRequired: 'No',
        eSensitive: 'No',
        iMaxVal: 100,
      };
      const expectedResult = { iSettingId: 1, ...createConfigurationDto };

      jest.spyOn(repository, 'create').mockReturnValue(expectedResult as any);
      jest.spyOn(repository, 'save').mockResolvedValue(expectedResult as any);

      expect(await service.create(createConfigurationDto)).toEqual(expectedResult);
      expect(repository.create).toHaveBeenCalledWith(createConfigurationDto);
      expect(repository.save).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of configurations', async () => {
      const expectedResult = [{ iSettingId: 1, vName: 'TEST_SETTING' }];
      jest.spyOn(repository, 'find').mockResolvedValue(expectedResult as any);
      expect(await service.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single configuration', async () => {
      const id = 1;
      const expectedResult = { iSettingId: id, vName: 'TEST_SETTING' };
      jest.spyOn(repository, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await service.findOne(id)).toEqual(expectedResult);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { iSettingId: id } });
    });

    it('should throw a NotFoundException if configuration not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);
      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a configuration', async () => {
      const id = 1;
      const updateConfigurationDto: UpdateConfigurationDto = { vValue: 'Updated Value' };
      const existingConfiguration = { iSettingId: id, vName: 'TEST_SETTING' };

      jest.spyOn(service, 'findOne').mockResolvedValue(existingConfiguration as any);
      jest.spyOn(repository, 'update').mockResolvedValue({ affected: 1 } as any);

      expect(await service.update(id, updateConfigurationDto)).toEqual(existingConfiguration as any);
      expect(repository.update).toHaveBeenCalledWith(id, updateConfigurationDto);
    });

    it('should throw a NotFoundException if configuration to update not found', async () => {
        const id = 1;
        const updateConfigurationDto: UpdateConfigurationDto = { vValue: 'Updated Value' };
        jest.spyOn(service, 'findOne').mockRejectedValue(new NotFoundException());
        await expect(service.update(id, updateConfigurationDto)).rejects.toThrow(NotFoundException);
      });
  });

  describe('remove', () => {
    it('should remove a configuration', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 1 } as any);
      await service.remove(id);
      expect(repository.delete).toHaveBeenCalledWith(id);
    });

    it('should throw a NotFoundException if configuration to remove not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 0 } as any);
      await expect(service.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});