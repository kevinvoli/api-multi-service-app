import { Module } from '@nestjs/common';
import { AdminGroupPermission } from './entities/admin-group-permission.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminGroupPermissionService } from './admin-group-permission.service';
import { AdminGroupPermissionController } from './admin-group-permission.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AdminGroupPermission])],
  controllers: [AdminGroupPermissionController],
  providers: [AdminGroupPermissionService],
  exports: [TypeOrmModule.forFeature([AdminGroupPermission])],
})
export class AdminGroupPermissionModule {}
