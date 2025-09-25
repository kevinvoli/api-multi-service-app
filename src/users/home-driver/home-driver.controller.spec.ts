import { Test, TestingModule } from '@nestjs/testing';
import { HomeDriverController } from './home-driver.controller';
import { HomeDriverService } from './home-driver.service';

describe('HomeDriverController', () => {
  let controller: HomeDriverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeDriverController],
      providers: [HomeDriverService],
    }).compile();

    controller = module.get<HomeDriverController>(HomeDriverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
