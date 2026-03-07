import { Module } from '@nestjs/common';
import { IntentionsCriteres } from './entities/intentions-critere.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IntentionsCriteresService } from './intentions-criteres.service';
import { IntentionsCriteresController } from './intentions-criteres.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IntentionsCriteres])],
  controllers: [IntentionsCriteresController],
  providers: [IntentionsCriteresService],
  exports: [TypeOrmModule.forFeature([IntentionsCriteres])],
})
export class IntentionsCriteresModule {}
