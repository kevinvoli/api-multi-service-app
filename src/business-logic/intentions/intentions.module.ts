import { Module } from '@nestjs/common';
import { IntentionsService } from './intentions.service';
import { IntentionsController } from './intentions.controller';

@Module({
  controllers: [IntentionsController],
  providers: [IntentionsService],
})
export class IntentionsModule {}
