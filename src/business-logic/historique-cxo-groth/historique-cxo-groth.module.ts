import { Module } from '@nestjs/common';
import { HistoriqueCxoGrothService } from './historique-cxo-groth.service';
import { HistoriqueCxoGrothController } from './historique-cxo-groth.controller';

@Module({
  controllers: [HistoriqueCxoGrothController],
  providers: [HistoriqueCxoGrothService],
})
export class HistoriqueCxoGrothModule {}
