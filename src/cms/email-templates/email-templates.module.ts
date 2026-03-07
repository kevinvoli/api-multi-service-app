import { Module } from '@nestjs/common';
import { EmailTemplates } from './entities/email-template.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailTemplatesService } from './email-templates.service';
import { EmailTemplatesController } from './email-templates.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmailTemplates])],
  controllers: [EmailTemplatesController],
  providers: [EmailTemplatesService],
  exports: [TypeOrmModule.forFeature([EmailTemplates])],
})
export class EmailTemplatesModule {}
