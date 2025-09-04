import { Test, TestingModule } from '@nestjs/testing';
import { IntentionsCriteresService } from './intentions-criteres.service';

describe('IntentionsCriteresService', () => {
  let service: IntentionsCriteresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntentionsCriteresService],
    }).compile();

    service = module.get<IntentionsCriteresService>(IntentionsCriteresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
