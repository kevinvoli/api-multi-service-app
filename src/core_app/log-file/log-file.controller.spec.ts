import { Test, TestingModule } from '@nestjs/testing';
import { LogFileController } from './log-file.controller';
import { LogFileService } from './log-file.service';
import { CreateLogFileDto } from './dto/create-log-file.dto';
import { UpdateLogFileDto } from './dto/update-log-file.dto';

const mockLogFileService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('LogFileController', () => {
  let controller: LogFileController;
  let service: LogFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogFileController],
      providers: [
        {
          provide: LogFileService,
          useValue: mockLogFileService,
        },
      ],
    }).compile();

    controller = module.get<LogFileController>(LogFileController);
    service = module.get<LogFileService>(LogFileService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new log file', async () => {
      const createLogFileDto: CreateLogFileDto = {
        vLogName: 'test.log',
        tDate: new Date(),
        iCompanyId: 1,
        iDriverId: 1,
        eUserType: 'driver',
        eType: 'licence',
      };
      const expectedResult = { iLogId: 1, ...createLogFileDto };
      jest.spyOn(service, 'create').mockResolvedValue(expectedResult as any);

      expect(await controller.create(createLogFileDto)).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createLogFileDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of log files', async () => {
      const expectedResult = [{ iLogId: 1, vLogName: 'test.log' }];
      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult as any);
      expect(await controller.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single log file', async () => {
      const id = '1';
      const expectedResult = { iLogId: 1, vLogName: 'test.log' };
      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await controller.findOne(id)).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('update', () => {
    it('should update a log file', async () => {
      const id = '1';
      const updateLogFileDto: UpdateLogFileDto = { vLogName: 'updated.log' };
      const expectedResult = { iLogId: 1, vLogName: 'updated.log' };
      jest.spyOn(service, 'update').mockResolvedValue(expectedResult as any);

      expect(await controller.update(id, updateLogFileDto)).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(+id, updateLogFileDto);
    });
  });

  describe('remove', () => {
    it('should remove a log file', async () => {
      const id = '1';
      jest.spyOn(service, 'remove').mockResolvedValue(undefined);
      await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(+id);
    });
  });
});