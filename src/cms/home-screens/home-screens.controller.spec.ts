import { Test, TestingModule } from '@nestjs/testing';
import { HomeScreensController } from './home-screens.controller';
import { HomeScreensService } from './home-screens.service';

describe('HomeScreensController', () => {
  let controller: HomeScreensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeScreensController],
      providers: [HomeScreensService],
    }).compile();

    controller = module.get<HomeScreensController>(HomeScreensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
