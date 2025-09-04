import { Test, TestingModule } from '@nestjs/testing';
import { HistoriqueCxoGrothController } from './historique-cxo-groth.controller';
import { HistoriqueCxoGrothService } from './historique-cxo-groth.service';

describe('HistoriqueCxoGrothController', () => {
  let controller: HistoriqueCxoGrothController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoriqueCxoGrothController],
      providers: [HistoriqueCxoGrothService],
    }).compile();

    controller = module.get<HistoriqueCxoGrothController>(HistoriqueCxoGrothController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
