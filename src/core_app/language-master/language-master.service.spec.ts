import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LanguageMasterService } from './language-master.service';
import { LanguageMaster } from './entities/language-master.entity';
import { CreateLanguageMasterDto } from './dto/create-language-master.dto';
import { UpdateLanguageMasterDto } from './dto/update-language-master.dto';
import { NotFoundException } from '@nestjs/common';

const mockLanguageMasterRepository = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('LanguageMasterService', () => {
  let service: LanguageMasterService;
  let repository: Repository<LanguageMaster>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LanguageMasterService,
        {
          provide: getRepositoryToken(LanguageMaster),
          useFactory: mockLanguageMasterRepository,
        },
      ],
    }).compile();

    service = module.get<LanguageMasterService>(LanguageMasterService);
    repository = module.get<Repository<LanguageMaster>>(getRepositoryToken(LanguageMaster));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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

      jest.spyOn(repository, 'create').mockReturnValue(expectedResult as any);
      jest.spyOn(repository, 'save').mockResolvedValue(expectedResult as any);

      expect(await service.create(createLanguageMasterDto)).toEqual(expectedResult);
      expect(repository.create).toHaveBeenCalledWith(createLanguageMasterDto);
      expect(repository.save).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of language masters', async () => {
      const expectedResult = [{ iLanguageMasId: 1, vTitle: 'English' }];
      jest.spyOn(repository, 'find').mockResolvedValue(expectedResult as any);
      expect(await service.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single language master', async () => {
      const id = 1;
      const expectedResult = { iLanguageMasId: id, vTitle: 'English' };
      jest.spyOn(repository, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await service.findOne(id)).toEqual(expectedResult);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { iLanguageMasId: id } });
    });

    it('should throw a NotFoundException if language master not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);
      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a language master', async () => {
      const id = 1;
      const updateLanguageMasterDto: UpdateLanguageMasterDto = { vTitle: 'English-Updated' };
      const existingLanguageMaster = { iLanguageMasId: id, vTitle: 'English' };

      jest.spyOn(service, 'findOne').mockResolvedValue(existingLanguageMaster as any);
      jest.spyOn(repository, 'update').mockResolvedValue({ affected: 1 } as any);

      expect(await service.update(id, updateLanguageMasterDto)).toEqual(existingLanguageMaster as any);
      expect(repository.update).toHaveBeenCalledWith(id, updateLanguageMasterDto);
    });

    it('should throw a NotFoundException if language master to update not found', async () => {
        const id = 1;
        const updateLanguageMasterDto: UpdateLanguageMasterDto = { vTitle: 'English-Updated' };
        jest.spyOn(service, 'findOne').mockRejectedValue(new NotFoundException());
        await expect(service.update(id, updateLanguageMasterDto)).rejects.toThrow(NotFoundException);
      });
  });

  describe('remove', () => {
    it('should remove a language master', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 1 } as any);
      await service.remove(id);
      expect(repository.delete).toHaveBeenCalledWith(id);
    });

    it('should throw a NotFoundException if language master to remove not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 0 } as any);
      await expect(service.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});