import { Test, TestingModule } from '@nestjs/testing';
import { ConfigurationsController } from './configurations.controller';
import { ConfigurationsService } from './configurations.service';
import { CreateConfigurationDto } from './dto/create-configuration.dto';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';

const mockConfigurationsService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('ConfigurationsController', () => {
  let controller: ConfigurationsController;
  let service: ConfigurationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfigurationsController],
      providers: [
        {
          provide: ConfigurationsService,
          useValue: mockConfigurationsService,
        },
      ],
    }).compile();

    controller = module.get<ConfigurationsController>(ConfigurationsController);
    service = module.get<ConfigurationsService>(ConfigurationsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
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
      jest.spyOn(service, 'create').mockResolvedValue(expectedResult as any);

      expect(await controller.create(createConfigurationDto)).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createConfigurationDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of configurations', async () => {
      const expectedResult = [{ iSettingId: 1, vName: 'TEST_SETTING' }];
      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult as any);
      expect(await controller.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single configuration', async () => {
      const id = '1';
      const expectedResult = { iSettingId: 1, vName: 'TEST_SETTING' };
      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await controller.findOne(id)).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('update', () => {
    it('should update a configuration', async () => {
      const id = '1';
      const updateConfigurationDto: UpdateConfigurationDto = { vValue: 'Updated Value' };
      const expectedResult = { iSettingId: 1, vValue: 'Updated Value' };
      jest.spyOn(service, 'update').mockResolvedValue(expectedResult as any);

      expect(await controller.update(id, updateConfigurationDto)).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(+id, updateConfigurationDto);
    });
  });

  describe('remove', () => {
    it('should remove a configuration', async () => {
      const id = '1';
      jest.spyOn(service, 'remove').mockResolvedValue(undefined);
      await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(+id);
    });
  });
});