import { Module } from '@nestjs/common';
import { HelpDetail } from './entities/help-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelpDetailService } from './help-detail.service';
import { HelpDetailController } from './help-detail.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HelpDetail])],
  controllers: [HelpDetailController],
  providers: [HelpDetailService],
  exports: [TypeOrmModule.forFeature([HelpDetail])],
})
export class HelpDetailModule {}
