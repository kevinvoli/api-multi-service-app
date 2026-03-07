import { Module } from '@nestjs/common';
import { SmsTemplates } from './entities/sms-template.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SmsTemplatesService } from './sms-templates.service';
import { SmsTemplatesController } from './sms-templates.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SmsTemplates])],
  controllers: [SmsTemplatesController],
  providers: [SmsTemplatesService],
  exports: [TypeOrmModule.forFeature([SmsTemplates])],
})
export class SmsTemplatesModule {}
