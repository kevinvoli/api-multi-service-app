import { Module } from '@nestjs/common';
import { MasterServiceMenuService } from './master-service-menu.service';
import { MasterServiceMenuController } from './master-service-menu.controller';

@Module({
  controllers: [MasterServiceMenuController],
  providers: [MasterServiceMenuService],
})
export class MasterServiceMenuModule {}
