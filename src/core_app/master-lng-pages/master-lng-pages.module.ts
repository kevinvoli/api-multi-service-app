import { Module } from '@nestjs/common';
import { MasterLngPagesService } from './master-lng-pages.service';
import { MasterLngPagesController } from './master-lng-pages.controller';

@Module({
  controllers: [MasterLngPagesController],
  providers: [MasterLngPagesService],
})
export class MasterLngPagesModule {}
