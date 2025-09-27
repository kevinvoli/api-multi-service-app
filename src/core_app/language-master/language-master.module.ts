import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageMasterService } from './language-master.service';
import { LanguageMasterController } from './language-master.controller';
import { LanguageMaster } from './entities/language-master.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LanguageMaster])],
  controllers: [LanguageMasterController],
  providers: [LanguageMasterService],
})
export class LanguageMasterModule {}
