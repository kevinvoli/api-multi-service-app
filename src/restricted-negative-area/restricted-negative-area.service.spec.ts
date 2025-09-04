import { Test, TestingModule } from '@nestjs/testing';
import { RestrictedNegativeAreaService } from './restricted-negative-area.service';

describe('RestrictedNegativeAreaService', () => {
  let service: RestrictedNegativeAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestrictedNegativeAreaService],
    }).compile();

    service = module.get<RestrictedNegativeAreaService>(RestrictedNegativeAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
