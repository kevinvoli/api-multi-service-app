import { Module } from '@nestjs/common';
import { AdminAlertsModule } from './admin/admin-alerts/admin-alerts.module';
import { AdminGroupPermissionModule } from './admin/admin-group-permission/admin-group-permission.module';
import { AdminGroupsModule } from './admin/admin-groups/admin-groups.module';
import { AdminLocationsModule } from './admin/admin-locations/admin-locations.module';
import { AdminPermissionsModule } from './admin/admin-permissions/admin-permissions.module';
import { AdminPermissionsDisplayGroupsModule } from './admin-permissions-display-groups/admin-permissions-display-groups.module';
import { AdministratorsModule } from './administrators/administrators.module';
import { AdminPanelModule } from './admin-panel/admin-panel.module';

@Module({
  imports: [
    AdminAlertsModule,
    AdminGroupPermissionModule,
    AdminGroupsModule,
    AdminLocationsModule,
    AdminPermissionsModule,
    AdminPermissionsDisplayGroupsModule,
    AdministratorsModule,
    AdminPanelModule,
  ],
  exports: [
    AdminAlertsModule,
    AdminGroupPermissionModule,
    AdminGroupsModule,
    AdminLocationsModule,
    AdminPermissionsModule,
    AdminPermissionsDisplayGroupsModule,
    AdministratorsModule,
    AdminPanelModule,
  ],
})
export class AdministrationModule {}