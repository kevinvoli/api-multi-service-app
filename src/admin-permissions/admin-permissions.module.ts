import { Module } from '@nestjs/common';
import { AdminPermissionsService } from './admin-permissions.service';
import { AdminPermissionsController } from './admin-permissions.controller';

@Module({
  controllers: [AdminPermissionsController],
  providers: [AdminPermissionsService],
})
export class AdminPermissionsModule {}
