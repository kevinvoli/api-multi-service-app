import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ObjectProspectionsService } from './object-prospections.service';
import { ObjectProspections } from './entities/object-prospection.entity';

const mockRepo = {
  find: jest.fn().mockResolvedValue([]),
  findOneBy: jest.fn().mockResolvedValue(null),
  create: jest.fn().mockReturnValue({}),
  save: jest.fn().mockResolvedValue({}),
  update: jest.fn().mockResolvedValue({ affected: 1 }),
  delete: jest.fn().mockResolvedValue({ affected: 1 }),
};

describe('ObjectProspectionsService', () => {
  let service: ObjectProspectionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ObjectProspectionsService,
        { provide: getRepositoryToken(ObjectProspections), useValue: mockRepo },
      ],
    }).compile();

    service = module.get<ObjectProspectionsService>(ObjectProspectionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findOne throws NotFoundException when record is missing', async () => {
    await expect(service.findOne(999)).rejects.toThrow('Record #999 not found');
  });
});
