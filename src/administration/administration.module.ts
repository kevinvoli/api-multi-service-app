import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { AdminPermissionsDisplayGroupsModule } from './admin-permissions-display-groups/admin-permissions-display-groups.module';
import { AdministratorsModule } from './administrators/administrators.module';

@Module({
  imports: [
    AdminModule,
    AdminPermissionsDisplayGroupsModule,
    AdministratorsModule,
  ],
  exports: [
    AdminModule,
    AdminPermissionsDisplayGroupsModule,
    AdministratorsModule,
  ],
})
export class AdministrationModule {}