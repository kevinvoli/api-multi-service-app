import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { VoiceDirectionFilesController } from './voice-direction-files.controller';
import { VoiceDirectionFilesService } from './voice-direction-files.service';
import { VoiceDirectionFiles } from './entities/voice-direction-file.entity';

const mockRepo = {
  find: jest.fn().mockResolvedValue([]),
  findOne: jest.fn().mockResolvedValue(null),
  findOneBy: jest.fn().mockResolvedValue(null),
  create: jest.fn().mockReturnValue({}),
  save: jest.fn().mockResolvedValue({}),
  update: jest.fn().mockResolvedValue({ affected: 1 }),
  delete: jest.fn().mockResolvedValue({ affected: 1 }),
  createQueryBuilder: jest.fn().mockReturnValue({
    where: jest.fn().mockReturnThis(),
    andWhere: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    orderBy: jest.fn().mockReturnThis(),
    skip: jest.fn().mockReturnThis(),
    take: jest.fn().mockReturnThis(),
    getMany: jest.fn().mockResolvedValue([]),
    getOne: jest.fn().mockResolvedValue(null),
    getManyAndCount: jest.fn().mockResolvedValue([[], 0]),
    getCount: jest.fn().mockResolvedValue(0),
  }),
};

describe('VoiceDirectionFilesController', () => {
  let controller: VoiceDirectionFilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoiceDirectionFilesController],
      providers: [
        VoiceDirectionFilesService,
        { provide: getRepositoryToken(VoiceDirectionFiles), useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<VoiceDirectionFilesController>(VoiceDirectionFilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
