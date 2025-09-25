import { Test, TestingModule } from '@nestjs/testing';
import { HistoriqueCxoGrothService } from './historique-cxo-groth.service';

describe('HistoriqueCxoGrothService', () => {
  let service: HistoriqueCxoGrothService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoriqueCxoGrothService],
    }).compile();

    service = module.get<HistoriqueCxoGrothService>(HistoriqueCxoGrothService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
