import { Test, TestingModule } from '@nestjs/testing';
import { PrescriptionImagesController } from './prescription-images.controller';
import { PrescriptionImagesService } from './prescription-images.service';

describe('PrescriptionImagesController', () => {
  let controller: PrescriptionImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrescriptionImagesController],
      providers: [PrescriptionImagesService],
    }).compile();

    controller = module.get<PrescriptionImagesController>(PrescriptionImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
