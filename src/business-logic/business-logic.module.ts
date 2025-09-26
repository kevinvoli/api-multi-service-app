import { Module } from '@nestjs/common';
import { HistoriqueCxoGrothModule } from './historique-cxo-groth/historique-cxo-groth.module';
import { IntentionsModule } from './intentions/intentions.module';
import { IntentionsCriteresModule } from './intentions-criteres/intentions-criteres.module';
import { ObjectCategoriesModule } from './object-categories/object-categories.module';
import { ObjectObjectifsModule } from './object-objectifs/object-objectifs.module';
import { ObjectProspectionsModule } from './object-prospections/object-prospections.module';
import { ObjectRealisationModule } from './object-realisation/object-realisation.module';

@Module({
  imports: [
    HistoriqueCxoGrothModule,
    IntentionsModule,
    IntentionsCriteresModule,
    ObjectCategoriesModule,
    ObjectObjectifsModule,
    ObjectProspectionsModule,
    ObjectRealisationModule,
  ],
  exports: [
    HistoriqueCxoGrothModule,
    IntentionsModule,
    IntentionsCriteresModule,
    ObjectCategoriesModule,
    ObjectObjectifsModule,
    ObjectProspectionsModule,
    ObjectRealisationModule,
  ],
})
export class BusinessLogicModule {}