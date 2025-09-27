import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IntentionsCriteresService } from './intentions-criteres.service';
import { IntentionsCriteresController } from './intentions-criteres.controller';
import { IntentionsCriteres } from './entities/intentions-critere.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IntentionsCriteres])],
  controllers: [IntentionsCriteresController],
  providers: [IntentionsCriteresService],
})
export class IntentionsCriteresModule {}