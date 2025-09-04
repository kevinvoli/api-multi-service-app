import { Test, TestingModule } from '@nestjs/testing';
import { RequestPostDataController } from './request-post-data.controller';
import { RequestPostDataService } from './request-post-data.service';

describe('RequestPostDataController', () => {
  let controller: RequestPostDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestPostDataController],
      providers: [RequestPostDataService],
    }).compile();

    controller = module.get<RequestPostDataController>(RequestPostDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
