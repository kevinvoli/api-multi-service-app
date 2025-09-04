import { Test, TestingModule } from '@nestjs/testing';
import { ObjectRealisationService } from './object-realisation.service';

describe('ObjectRealisationService', () => {
  let service: ObjectRealisationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObjectRealisationService],
    }).compile();

    service = module.get<ObjectRealisationService>(ObjectRealisationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
