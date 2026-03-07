import { Module } from '@nestjs/common';
import { HistoriqueCxoGroth } from './entities/historique-cxo-groth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoriqueCxoGrothService } from './historique-cxo-groth.service';
import { HistoriqueCxoGrothController } from './historique-cxo-groth.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HistoriqueCxoGroth])],
  controllers: [HistoriqueCxoGrothController],
  providers: [HistoriqueCxoGrothService],
  exports: [TypeOrmModule.forFeature([HistoriqueCxoGroth])],
})
export class HistoriqueCxoGrothModule {}
