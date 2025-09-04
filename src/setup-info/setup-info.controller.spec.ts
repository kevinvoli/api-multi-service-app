import { Test, TestingModule } from '@nestjs/testing';
import { SetupInfoController } from './setup-info.controller';
import { SetupInfoService } from './setup-info.service';

describe('SetupInfoController', () => {
  let controller: SetupInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SetupInfoController],
      providers: [SetupInfoService],
    }).compile();

    controller = module.get<SetupInfoController>(SetupInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
