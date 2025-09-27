import { Test, TestingModule } from '@nestjs/testing';
import { LanguageMasterController } from './language-master.controller';
import { LanguageMasterService } from './language-master.service';
import { CreateLanguageMasterDto } from './dto/create-language-master.dto';
import { UpdateLanguageMasterDto } from './dto/update-language-master.dto';

const mockLanguageMasterService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('LanguageMasterController', () => {
  let controller: LanguageMasterController;
  let service: LanguageMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguageMasterController],
      providers: [
        {
          provide: LanguageMasterService,
          useValue: mockLanguageMasterService,
        },
      ],
    }).compile();

    controller = module.get<LanguageMasterController>(LanguageMasterController);
    service = module.get<LanguageMasterService>(LanguageMasterService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new language master', async () => {
      const createLanguageMasterDto: CreateLanguageMasterDto = {
        vTitle: 'English',
        vTitleEn: 'English',
        vCode: 'en',
        vGMapLangCode: 'en',
        vLangCode: 'en',
        vCurrencyCode: 'USD',
        vCurrencySymbol: '$',
        iDispOrder: 1,
        eStatus: 'Active',
        eDefault: 'Yes',
        eDirectionCode: 'ltr',
      };
      const expectedResult = { iLanguageMasId: 1, ...createLanguageMasterDto };
      jest.spyOn(service, 'create').mockResolvedValue(expectedResult as any);

      expect(await controller.create(createLanguageMasterDto)).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createLanguageMasterDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of language masters', async () => {
      const expectedResult = [{ iLanguageMasId: 1, vTitle: 'English' }];
      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult as any);
      expect(await controller.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single language master', async () => {
      const id = '1';
      const expectedResult = { iLanguageMasId: 1, vTitle: 'English' };
      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await controller.findOne(id)).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('update', () => {
    it('should update a language master', async () => {
      const id = '1';
      const updateLanguageMasterDto: UpdateLanguageMasterDto = { vTitle: 'English-Updated' };
      const expectedResult = { iLanguageMasId: 1, vTitle: 'English-Updated' };
      jest.spyOn(service, 'update').mockResolvedValue(expectedResult as any);

      expect(await controller.update(id, updateLanguageMasterDto)).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(+id, updateLanguageMasterDto);
    });
  });

  describe('remove', () => {
    it('should remove a language master', async () => {
      const id = '1';
      jest.spyOn(service, 'remove').mockResolvedValue(undefined);
      await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(+id);
    });
  });
});