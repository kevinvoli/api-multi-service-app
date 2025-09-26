import { Module } from '@nestjs/common';
import { AdminAlertsModule } from './admin/admin-alerts/admin-alerts.module';
import { AdminGroupPermissionModule } from './admin/admin-group-permission/admin-group-permission.module';
import { AdminGroupsModule } from './admin/admin-groups/admin-groups.module';
import { AdminLocationsModule } from './admin/admin-locations/admin-locations.module';
import { AdminPermissionsModule } from './admin/admin-permissions/admin-permissions.module';
import { AdminPermissionsDisplayGroupsModule } from './admin-permissions-display-groups/admin-permissions-display-groups.module';
import { AdministratorsModule } from './administrators/administrators.module';

@Module({
  imports: [
    AdminAlertsModule,
    AdminGroupPermissionModule,
    AdminGroupsModule,
    AdminLocationsModule,
    AdminPermissionsModule,
    AdminPermissionsDisplayGroupsModule,
    AdministratorsModule,
  ],
  exports: [
    AdminAlertsModule,
    AdminGroupPermissionModule,
    AdminGroupsModule,
    AdminLocationsModule,
    AdminPermissionsModule,
    AdminPermissionsDisplayGroupsModule,
    AdministratorsModule,
  ],
})
export class AdministrationModule {}