import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IntentionsService } from './intentions.service';
import { IntentionsController } from './intentions.controller';
import { Intentions } from './entities/intention.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Intentions])],
  controllers: [IntentionsController],
  providers: [IntentionsService],
})
export class IntentionsModule {}