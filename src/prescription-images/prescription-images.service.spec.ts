import { Test, TestingModule } from '@nestjs/testing';
import { PrescriptionImagesService } from './prescription-images.service';

describe('PrescriptionImagesService', () => {
  let service: PrescriptionImagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrescriptionImagesService],
    }).compile();

    service = module.get<PrescriptionImagesService>(PrescriptionImagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
