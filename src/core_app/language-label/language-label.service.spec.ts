import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LanguageLabelService } from './language-label.service';
import { LanguageLabel } from './entities/language-label.entity';
import { CreateLanguageLabelDto } from './dto/create-language-label.dto';
import { UpdateLanguageLabelDto } from './dto/update-language-label.dto';
import { NotFoundException } from '@nestjs/common';

const mockLanguageLabelRepository = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('LanguageLabelService', () => {
  let service: LanguageLabelService;
  let repository: Repository<LanguageLabel>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LanguageLabelService,
        {
          provide: getRepositoryToken(LanguageLabel),
          useFactory: mockLanguageLabelRepository,
        },
      ],
    }).compile();

    service = module.get<LanguageLabelService>(LanguageLabelService);
    repository = module.get<Repository<LanguageLabel>>(getRepositoryToken(LanguageLabel));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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

      jest.spyOn(repository, 'create').mockReturnValue(expectedResult as any);
      jest.spyOn(repository, 'save').mockResolvedValue(expectedResult as any);

      expect(await service.create(createLanguageLabelDto)).toEqual(expectedResult);
      expect(repository.create).toHaveBeenCalledWith(createLanguageLabelDto);
      expect(repository.save).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of language labels', async () => {
      const expectedResult = [{ languageLabelId: 1, vLabel: 'LBL_GREETING' }];
      jest.spyOn(repository, 'find').mockResolvedValue(expectedResult as any);
      expect(await service.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single language label', async () => {
      const id = 1;
      const expectedResult = { languageLabelId: id, vLabel: 'LBL_GREETING' };
      jest.spyOn(repository, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await service.findOne(id)).toEqual(expectedResult);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { languageLabelId: id } });
    });

    it('should throw a NotFoundException if language label not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);
      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a language label', async () => {
      const id = 1;
      const updateLanguageLabelDto: UpdateLanguageLabelDto = { vValue: 'Hello World' };
      const existingLanguageLabel = { languageLabelId: id, vValue: 'Hello' };

      jest.spyOn(service, 'findOne').mockResolvedValue(existingLanguageLabel as any);
      jest.spyOn(repository, 'update').mockResolvedValue({ affected: 1 } as any);

      expect(await service.update(id, updateLanguageLabelDto)).toEqual(existingLanguageLabel as any);
      expect(repository.update).toHaveBeenCalledWith(id, updateLanguageLabelDto);
    });

    it('should throw a NotFoundException if language label to update not found', async () => {
        const id = 1;
        const updateLanguageLabelDto: UpdateLanguageLabelDto = { vValue: 'Hello World' };
        jest.spyOn(service, 'findOne').mockRejectedValue(new NotFoundException());
        await expect(service.update(id, updateLanguageLabelDto)).rejects.toThrow(NotFoundException);
      });
  });

  describe('remove', () => {
    it('should remove a language label', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 1 } as any);
      await service.remove(id);
      expect(repository.delete).toHaveBeenCalledWith(id);
    });

    it('should throw a NotFoundException if language label to remove not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 0 } as any);
      await expect(service.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});