import { Test, TestingModule } from '@nestjs/testing';
import { AppScreenMasterController } from './app-screen-master.controller';
import { AppScreenMasterService } from './app-screen-master.service';

describe('AppScreenMasterController', () => {
  let controller: AppScreenMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppScreenMasterController],
      providers: [AppScreenMasterService],
    }).compile();

    controller = module.get<AppScreenMasterController>(AppScreenMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
