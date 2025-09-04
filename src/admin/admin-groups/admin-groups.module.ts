import { Module } from '@nestjs/common';
import { AdminGroupsService } from './admin-groups.service';
import { AdminGroupsController } from './admin-groups.controller';

@Module({
  controllers: [AdminGroupsController],
  providers: [AdminGroupsService],
})
export class AdminGroupsModule {}
