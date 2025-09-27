import { Test, TestingModule } from '@nestjs/testing';
import { SetupInfoController } from './setup-info.controller';
import { SetupInfoService } from './setup-info.service';
import { CreateSetupInfoDto } from './dto/create-setup-info.dto';
import { UpdateSetupInfoDto } from './dto/update-setup-info.dto';

const mockSetupInfoService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('SetupInfoController', () => {
  let controller: SetupInfoController;
  let service: SetupInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SetupInfoController],
      providers: [
        {
          provide: SetupInfoService,
          useValue: mockSetupInfoService,
        },
      ],
    }).compile();

    controller = module.get<SetupInfoController>(SetupInfoController);
    service = module.get<SetupInfoService>(SetupInfoService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new setup info', async () => {
      const createSetupInfoDto: CreateSetupInfoDto = {
        vName: 'Test Project',
        vProjectName: 'TestProject',
      };
      const expectedResult = { iSetupId: 1, ...createSetupInfoDto, dSetupDate: new Date() };
      jest.spyOn(service, 'create').mockResolvedValue(expectedResult as any);

      expect(await controller.create(createSetupInfoDto)).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createSetupInfoDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of setup infos', async () => {
      const expectedResult = [{ iSetupId: 1, vName: 'Test Project' }];
      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult as any);
      expect(await controller.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single setup info', async () => {
      const id = '1';
      const expectedResult = { iSetupId: 1, vName: 'Test Project' };
      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await controller.findOne(id)).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('update', () => {
    it('should update a setup info', async () => {
      const id = '1';
      const updateSetupInfoDto: UpdateSetupInfoDto = { vProjectName: 'UpdatedProject' };
      const expectedResult = { iSetupId: 1, vProjectName: 'UpdatedProject' };
      jest.spyOn(service, 'update').mockResolvedValue(expectedResult as any);

      expect(await controller.update(id, updateSetupInfoDto)).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(+id, updateSetupInfoDto);
    });
  });

  describe('remove', () => {
    it('should remove a setup info', async () => {
      const id = '1';
      jest.spyOn(service, 'remove').mockResolvedValue(undefined);
      await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(+id);
    });
  });
});