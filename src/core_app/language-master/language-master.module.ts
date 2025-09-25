import { Module } from '@nestjs/common';
import { LanguageMasterService } from './language-master.service';
import { LanguageMasterController } from './language-master.controller';

@Module({
  controllers: [LanguageMasterController],
  providers: [LanguageMasterService],
})
export class LanguageMasterModule {}
