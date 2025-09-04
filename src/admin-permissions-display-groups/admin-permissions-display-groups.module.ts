import { Module } from '@nestjs/common';
import { AdminPermissionsDisplayGroupsService } from './admin-permissions-display-groups.service';
import { AdminPermissionsDisplayGroupsController } from './admin-permissions-display-groups.controller';

@Module({
  controllers: [AdminPermissionsDisplayGroupsController],
  providers: [AdminPermissionsDisplayGroupsService],
})
export class AdminPermissionsDisplayGroupsModule {}
