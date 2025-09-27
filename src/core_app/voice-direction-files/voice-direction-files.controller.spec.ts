import { Test, TestingModule } from '@nestjs/testing';
import { VoiceDirectionFilesController } from './voice-direction-files.controller';
import { VoiceDirectionFilesService } from './voice-direction-files.service';
import { CreateVoiceDirectionFileDto } from './dto/create-voice-direction-file.dto';
import { UpdateVoiceDirectionFileDto } from './dto/update-voice-direction-file.dto';

const mockVoiceDirectionFilesService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('VoiceDirectionFilesController', () => {
  let controller: VoiceDirectionFilesController;
  let service: VoiceDirectionFilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoiceDirectionFilesController],
      providers: [
        {
          provide: VoiceDirectionFilesService,
          useValue: mockVoiceDirectionFilesService,
        },
      ],
    }).compile();

    controller = module.get<VoiceDirectionFilesController>(VoiceDirectionFilesController);
    service = module.get<VoiceDirectionFilesService>(VoiceDirectionFilesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new voice direction file', async () => {
      const createVoiceDirectionFileDto: CreateVoiceDirectionFileDto = {
        iUserId: 1,
        vFile: 'test.mp3',
        iOrderId: 1,
      };
      const expectedResult = { iVoiceDirectionFileId: 1, ...createVoiceDirectionFileDto, tAddedDate: new Date() };
      jest.spyOn(service, 'create').mockResolvedValue(expectedResult as any);

      expect(await controller.create(createVoiceDirectionFileDto)).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createVoiceDirectionFileDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of voice direction files', async () => {
      const expectedResult = [{ iVoiceDirectionFileId: 1, vFile: 'test.mp3' }];
      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult as any);
      expect(await controller.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single voice direction file', async () => {
      const id = '1';
      const expectedResult = { iVoiceDirectionFileId: 1, vFile: 'test.mp3' };
      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await controller.findOne(id)).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('update', () => {
    it('should update a voice direction file', async () => {
      const id = '1';
      const updateVoiceDirectionFileDto: UpdateVoiceDirectionFileDto = { vFile: 'updated.mp3' };
      const expectedResult = { iVoiceDirectionFileId: 1, vFile: 'updated.mp3' };
      jest.spyOn(service, 'update').mockResolvedValue(expectedResult as any);

      expect(await controller.update(id, updateVoiceDirectionFileDto)).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(+id, updateVoiceDirectionFileDto);
    });
  });

  describe('remove', () => {
    it('should remove a voice direction file', async () => {
      const id = '1';
      jest.spyOn(service, 'remove').mockResolvedValue(undefined);
      await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(+id);
    });
  });
});