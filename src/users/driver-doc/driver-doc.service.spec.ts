import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DriverDocService } from './driver-doc.service';
import { DriverDoc } from './entities/driver-doc.entity';

const mockRepo = {
  find: jest.fn().mockResolvedValue([]),
  findOneBy: jest.fn().mockResolvedValue(null),
  create: jest.fn().mockReturnValue({}),
  save: jest.fn().mockResolvedValue({}),
  update: jest.fn().mockResolvedValue({ affected: 1 }),
  delete: jest.fn().mockResolvedValue({ affected: 1 }),
};

describe('DriverDocService', () => {
  let service: DriverDocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DriverDocService,
        { provide: getRepositoryToken(DriverDoc), useValue: mockRepo },
      ],
    }).compile();

    service = module.get<DriverDocService>(DriverDocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findOne throws NotFoundException when record is missing', async () => {
    await expect(service.findOne(999)).rejects.toThrow('Record #999 not found');
  });
});
