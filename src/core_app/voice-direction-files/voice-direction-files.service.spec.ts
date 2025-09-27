import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VoiceDirectionFilesService } from './voice-direction-files.service';
import { VoiceDirectionFiles } from './entities/voice-direction-file.entity';
import { CreateVoiceDirectionFileDto } from './dto/create-voice-direction-file.dto';
import { UpdateVoiceDirectionFileDto } from './dto/update-voice-direction-file.dto';
import { NotFoundException } from '@nestjs/common';

const mockVoiceDirectionFilesRepository = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('VoiceDirectionFilesService', () => {
  let service: VoiceDirectionFilesService;
  let repository: Repository<VoiceDirectionFiles>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VoiceDirectionFilesService,
        {
          provide: getRepositoryToken(VoiceDirectionFiles),
          useFactory: mockVoiceDirectionFilesRepository,
        },
      ],
    }).compile();

    service = module.get<VoiceDirectionFilesService>(VoiceDirectionFilesService);
    repository = module.get<Repository<VoiceDirectionFiles>>(getRepositoryToken(VoiceDirectionFiles));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new voice direction file', async () => {
      const createVoiceDirectionFileDto: CreateVoiceDirectionFileDto = {
        iUserId: 1,
        vFile: 'test.mp3',
        iOrderId: 1,
      };
      const expectedResult = { iVoiceDirectionFileId: 1, ...createVoiceDirectionFileDto, tAddedDate: new Date() };

      jest.spyOn(repository, 'create').mockReturnValue(expectedResult as any);
      jest.spyOn(repository, 'save').mockResolvedValue(expectedResult as any);

      expect(await service.create(createVoiceDirectionFileDto)).toEqual(expectedResult);
      expect(repository.create).toHaveBeenCalledWith(createVoiceDirectionFileDto);
      expect(repository.save).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of voice direction files', async () => {
      const expectedResult = [{ iVoiceDirectionFileId: 1, vFile: 'test.mp3' }];
      jest.spyOn(repository, 'find').mockResolvedValue(expectedResult as any);
      expect(await service.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single voice direction file', async () => {
      const id = 1;
      const expectedResult = { iVoiceDirectionFileId: id, vFile: 'test.mp3' };
      jest.spyOn(repository, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await service.findOne(id)).toEqual(expectedResult);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { iVoiceDirectionFileId: id } });
    });

    it('should throw a NotFoundException if voice direction file not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);
      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a voice direction file', async () => {
      const id = 1;
      const updateVoiceDirectionFileDto: UpdateVoiceDirectionFileDto = { vFile: 'updated.mp3' };
      const existingFile = { iVoiceDirectionFileId: id, vFile: 'test.mp3' };

      jest.spyOn(service, 'findOne').mockResolvedValue(existingFile as any);
      jest.spyOn(repository, 'update').mockResolvedValue({ affected: 1 } as any);

      expect(await service.update(id, updateVoiceDirectionFileDto)).toEqual(existingFile as any);
    });

    it('should throw a NotFoundException if voice direction file to update not found', async () => {
        const id = 1;
        const updateVoiceDirectionFileDto: UpdateVoiceDirectionFileDto = { vFile: 'updated.mp3' };
        jest.spyOn(repository, 'findOne').mockResolvedValue(null);
        await expect(service.update(id, updateVoiceDirectionFileDto)).rejects.toThrow(NotFoundException);
      });
  });

  describe('remove', () => {
    it('should remove a voice direction file', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 1 } as any);
      await service.remove(id);
      expect(repository.delete).toHaveBeenCalledWith(id);
    });

    it('should throw a NotFoundException if voice direction file to remove not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 0 } as any);
      await expect(service.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});