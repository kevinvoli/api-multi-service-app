import { Test, TestingModule } from '@nestjs/testing';
import { RegisterDriverController } from './register-driver.controller';
import { RegisterDriverService } from './register-driver.service';

describe('RegisterDriverController', () => {
  let controller: RegisterDriverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterDriverController],
      providers: [RegisterDriverService],
    }).compile();

    controller = module.get<RegisterDriverController>(RegisterDriverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
