import { Module } from '@nestjs/common';
import { HelpDetailService } from './help-detail.service';
import { HelpDetailController } from './help-detail.controller';

@Module({
  controllers: [HelpDetailController],
  providers: [HelpDetailService],
})
export class HelpDetailModule {}
