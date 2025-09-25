import { Test, TestingModule } from '@nestjs/testing';
import { CabRequestNowController } from './cab-request-now.controller';
import { CabRequestNowService } from './cab-request-now.service';

describe('CabRequestNowController', () => {
  let controller: CabRequestNowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CabRequestNowController],
      providers: [CabRequestNowService],
    }).compile();

    controller = module.get<CabRequestNowController>(CabRequestNowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
