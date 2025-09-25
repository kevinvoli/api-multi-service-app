import { Test, TestingModule } from '@nestjs/testing';
import { IdproofImagesController } from './idproof-images.controller';
import { IdproofImagesService } from './idproof-images.service';

describe('IdproofImagesController', () => {
  let controller: IdproofImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdproofImagesController],
      providers: [IdproofImagesService],
    }).compile();

    controller = module.get<IdproofImagesController>(IdproofImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
