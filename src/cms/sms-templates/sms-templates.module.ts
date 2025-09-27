import { Module } from '@nestjs/common';
import { SmsTemplatesService } from './sms-templates.service';
import { SmsTemplatesController } from './sms-templates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SmsTemplates } from './entities/sms-template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SmsTemplates])],
  controllers: [SmsTemplatesController],
  providers: [SmsTemplatesService],
})
export class SmsTemplatesModule {}