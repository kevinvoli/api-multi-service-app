import { Module } from '@nestjs/common';
import { EmailTemplatesService } from './email-templates.service';
import { EmailTemplatesController } from './email-templates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailTemplates } from './entities/email-template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmailTemplates])],
  controllers: [EmailTemplatesController],
  providers: [EmailTemplatesService],
})
export class EmailTemplatesModule {}