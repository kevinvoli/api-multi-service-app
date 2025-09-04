import { Test, TestingModule } from '@nestjs/testing';
import { AppLaunchinfoController } from './app-launchinfo.controller';
import { AppLaunchinfoService } from './app-launchinfo.service';

describe('AppLaunchinfoController', () => {
  let controller: AppLaunchinfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppLaunchinfoController],
      providers: [AppLaunchinfoService],
    }).compile();

    controller = module.get<AppLaunchinfoController>(AppLaunchinfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
