import { Test, TestingModule } from '@nestjs/testing';
import { ObjectRealisationController } from './object-realisation.controller';
import { ObjectRealisationService } from './object-realisation.service';

describe('ObjectRealisationController', () => {
  let controller: ObjectRealisationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjectRealisationController],
      providers: [ObjectRealisationService],
    }).compile();

    controller = module.get<ObjectRealisationController>(ObjectRealisationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
