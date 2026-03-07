import { Module } from '@nestjs/common';
import { SendMessageTemplates } from './entities/send-message-template.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SendMessageTemplatesService } from './send-message-templates.service';
import { SendMessageTemplatesController } from './send-message-templates.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SendMessageTemplates])],
  controllers: [SendMessageTemplatesController],
  providers: [SendMessageTemplatesService],
  exports: [TypeOrmModule.forFeature([SendMessageTemplates])],
})
export class SendMessageTemplatesModule {}
