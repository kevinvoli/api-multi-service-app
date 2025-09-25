import { Test, TestingModule } from '@nestjs/testing';
import { LogFileController } from './log-file.controller';
import { LogFileService } from './log-file.service';

describe('LogFileController', () => {
  let controller: LogFileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogFileController],
      providers: [LogFileService],
    }).compile();

    controller = module.get<LogFileController>(LogFileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
