import { Test, TestingModule } from '@nestjs/testing';
import { LanguageLabelController } from './language-label.controller';
import { LanguageLabelService } from './language-label.service';
import { CreateLanguageLabelDto } from './dto/create-language-label.dto';
import { UpdateLanguageLabelDto } from './dto/update-language-label.dto';

const mockLanguageLabelService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('LanguageLabelController', () => {
  let controller: LanguageLabelController;
  let service: LanguageLabelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguageLabelController],
      providers: [
        {
          provide: LanguageLabelService,
          useValue: mockLanguageLabelService,
        },
      ],
    }).compile();

    controller = module.get<LanguageLabelController>(LanguageLabelController);
    service = module.get<LanguageLabelService>(LanguageLabelService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new language label', async () => {
      const createLanguageLabelDto: CreateLanguageLabelDto = {
        lPageId: 1,
        vCode: 'en',
        vLabel: 'LBL_GREETING',
        orgLabel: 'Greeting',
        iSheetSrNo: 1,
        vValue: 'Hello',
        vScreen: 'HOME',
        eScript: 'No',
        eStatus: 'Active',
        eDeviceType: 'APP',
        eAppType: 'General',
        eFor: 'General',
        eProcessed: 'No',
        eInProcess: 'No',
      };
      const expectedResult = { languageLabelId: 1, ...createLanguageLabelDto };
      jest.spyOn(service, 'create').mockResolvedValue(expectedResult as any);

      expect(await controller.create(createLanguageLabelDto)).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createLanguageLabelDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of language labels', async () => {
      const expectedResult = [{ languageLabelId: 1, vLabel: 'LBL_GREETING' }];
      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult as any);
      expect(await controller.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single language label', async () => {
      const id = '1';
      const expectedResult = { languageLabelId: 1, vLabel: 'LBL_GREETING' };
      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await controller.findOne(id)).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('update', () => {
    it('should update a language label', async () => {
      const id = '1';
      const updateLanguageLabelDto: UpdateLanguageLabelDto = { vValue: 'Hello World' };
      const expectedResult = { languageLabelId: 1, vValue: 'Hello World' };
      jest.spyOn(service, 'update').mockResolvedValue(expectedResult as any);

      expect(await controller.update(id, updateLanguageLabelDto)).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(+id, updateLanguageLabelDto);
    });
  });

  describe('remove', () => {
    it('should remove a language label', async () => {
      const id = '1';
      jest.spyOn(service, 'remove').mockResolvedValue(undefined);
      await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(+id);
    });
  });
});