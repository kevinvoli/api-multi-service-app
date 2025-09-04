import { Module } from '@nestjs/common';
import { AdminGroupPermissionService } from './admin-group-permission.service';
import { AdminGroupPermissionController } from './admin-group-permission.controller';

@Module({
  controllers: [AdminGroupPermissionController],
  providers: [AdminGroupPermissionService],
})
export class AdminGroupPermissionModule {}
