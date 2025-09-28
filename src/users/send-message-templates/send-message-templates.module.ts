import { Module } from '@nestjs/common';
import { SendMessageTemplatesService } from './send-message-templates.service';
import { SendMessageTemplatesController } from './send-message-templates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SendMessageTemplates } from './entities/send-message-template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SendMessageTemplates])],
  controllers: [SendMessageTemplatesController],
  providers: [SendMessageTemplatesService],
})
export class SendMessageTemplatesModule {}
