import { Test, TestingModule } from '@nestjs/testing';
import { LanguageLabelOtherController } from './language-label-other.controller';
import { LanguageLabelOtherService } from './language-label-other.service';
import { CreateLanguageLabelOtherDto } from './dto/create-language-label-other.dto';
import { UpdateLanguageLabelOtherDto } from './dto/update-language-label-other.dto';

const mockLanguageLabelOtherService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('LanguageLabelOtherController', () => {
  let controller: LanguageLabelOtherController;
  let service: LanguageLabelOtherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguageLabelOtherController],
      providers: [
        {
          provide: LanguageLabelOtherService,
          useValue: mockLanguageLabelOtherService,
        },
      ],
    }).compile();

    controller = module.get<LanguageLabelOtherController>(LanguageLabelOtherController);
    service = module.get<LanguageLabelOtherService>(LanguageLabelOtherService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new language label other', async () => {
      const createLanguageLabelOtherDto: CreateLanguageLabelOtherDto = {
        lPageId: 1,
        vCode: 'en',
        vLabel: 'LBL_OTHER',
        vValue: 'Other Value',
        vScreen: 'SETTINGS',
        orgLabel: 'Other',
        iSheetSrNo: 1,
        eFor: 'General',
        eDeviceType: 'APP',
        eScript: 'No',
        eStatus: 'Active',
        eAppType: 'General',
        eProcessed: 'No',
        eInProcess: 'No',
      };
      const expectedResult = { languageLabelId: 1, ...createLanguageLabelOtherDto };
      jest.spyOn(service, 'create').mockResolvedValue(expectedResult as any);

      expect(await controller.create(createLanguageLabelOtherDto)).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createLanguageLabelOtherDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of language labels other', async () => {
      const expectedResult = [{ languageLabelId: 1, vLabel: 'LBL_OTHER' }];
      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult as any);
      expect(await controller.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single language label other', async () => {
      const id = '1';
      const expectedResult = { languageLabelId: 1, vLabel: 'LBL_OTHER' };
      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await controller.findOne(id)).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('update', () => {
    it('should update a language label other', async () => {
      const id = '1';
      const updateLanguageLabelOtherDto: UpdateLanguageLabelOtherDto = { vValue: 'Updated Other Value' };
      const expectedResult = { languageLabelId: 1, vValue: 'Updated Other Value' };
      jest.spyOn(service, 'update').mockResolvedValue(expectedResult as any);

      expect(await controller.update(id, updateLanguageLabelOtherDto)).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(+id, updateLanguageLabelOtherDto);
    });
  });

  describe('remove', () => {
    it('should remove a language label other', async () => {
      const id = '1';
      jest.spyOn(service, 'remove').mockResolvedValue(undefined);
      await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(+id);
    });
  });
});