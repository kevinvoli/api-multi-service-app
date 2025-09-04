import { Module } from '@nestjs/common';
import { IntentionsCriteresService } from './intentions-criteres.service';
import { IntentionsCriteresController } from './intentions-criteres.controller';

@Module({
  controllers: [IntentionsCriteresController],
  providers: [IntentionsCriteresService],
})
export class IntentionsCriteresModule {}
