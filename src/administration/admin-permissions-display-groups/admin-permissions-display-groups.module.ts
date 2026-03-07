import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminPermissionsDisplayGroupsService } from './admin-permissions-display-groups.service';
import { AdminPermissionsDisplayGroupsController } from './admin-permissions-display-groups.controller';

import { AdminPermissionDisplayGroups } from './entities/admin-permissions-display-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminPermissionDisplayGroups])],
  controllers: [AdminPermissionsDisplayGroupsController],
  providers: [AdminPermissionsDisplayGroupsService],
  exports: [TypeOrmModule.forFeature([AdminPermissionDisplayGroups])],
})
export class AdminPermissionsDisplayGroupsModule {}
