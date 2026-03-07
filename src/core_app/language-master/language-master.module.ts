import { Module } from '@nestjs/common';
import { LanguageMaster } from './entities/language-master.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageMasterService } from './language-master.service';
import { LanguageMasterController } from './language-master.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LanguageMaster])],
  controllers: [LanguageMasterController],
  providers: [LanguageMasterService],
  exports: [TypeOrmModule.forFeature([LanguageMaster])],
})
export class LanguageMasterModule {}
