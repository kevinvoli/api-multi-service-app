import { Module } from '@nestjs/common';
import { Intentions } from './entities/intention.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IntentionsService } from './intentions.service';
import { IntentionsController } from './intentions.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Intentions])],
  controllers: [IntentionsController],
  providers: [IntentionsService],
  exports: [TypeOrmModule.forFeature([Intentions])],
})
export class IntentionsModule {}
