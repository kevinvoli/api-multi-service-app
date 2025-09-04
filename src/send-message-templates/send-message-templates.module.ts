import { Module } from '@nestjs/common';
import { SendMessageTemplatesService } from './send-message-templates.service';
import { SendMessageTemplatesController } from './send-message-templates.controller';

@Module({
  controllers: [SendMessageTemplatesController],
  providers: [SendMessageTemplatesService],
})
export class SendMessageTemplatesModule {}
