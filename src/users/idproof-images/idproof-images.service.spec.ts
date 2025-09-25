import { Test, TestingModule } from '@nestjs/testing';
import { IdproofImagesService } from './idproof-images.service';

describe('IdproofImagesService', () => {
  let service: IdproofImagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdproofImagesService],
    }).compile();

    service = module.get<IdproofImagesService>(IdproofImagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
