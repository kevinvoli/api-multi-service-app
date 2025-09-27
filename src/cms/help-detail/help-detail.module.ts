import { Module } from '@nestjs/common';
import { HelpDetailService } from './help-detail.service';
import { HelpDetailController } from './help-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelpDetail } from './entities/help-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HelpDetail])],
  controllers: [HelpDetailController],
  providers: [HelpDetailService],
})
export class HelpDetailModule {}