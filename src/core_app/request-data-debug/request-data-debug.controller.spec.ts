import { Test, TestingModule } from '@nestjs/testing';
import { RequestDataDebugController } from './request-data-debug.controller';
import { RequestDataDebugService } from './request-data-debug.service';

describe('RequestDataDebugController', () => {
  let controller: RequestDataDebugController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestDataDebugController],
      providers: [RequestDataDebugService],
    }).compile();

    controller = module.get<RequestDataDebugController>(RequestDataDebugController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
