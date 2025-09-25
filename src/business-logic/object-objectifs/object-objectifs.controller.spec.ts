import { Test, TestingModule } from '@nestjs/testing';
import { ObjectObjectifsController } from './object-objectifs.controller';
import { ObjectObjectifsService } from './object-objectifs.service';

describe('ObjectObjectifsController', () => {
  let controller: ObjectObjectifsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjectObjectifsController],
      providers: [ObjectObjectifsService],
    }).compile();

    controller = module.get<ObjectObjectifsController>(ObjectObjectifsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
