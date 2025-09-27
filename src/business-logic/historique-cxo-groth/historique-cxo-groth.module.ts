import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoriqueCxoGrothService } from './historique-cxo-groth.service';
import { HistoriqueCxoGrothController } from './historique-cxo-groth.controller';
import { HistoriqueCxoGroth } from './entities/historique-cxo-groth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistoriqueCxoGroth])],
  controllers: [HistoriqueCxoGrothController],
  providers: [HistoriqueCxoGrothService],
})
export class HistoriqueCxoGrothModule {}