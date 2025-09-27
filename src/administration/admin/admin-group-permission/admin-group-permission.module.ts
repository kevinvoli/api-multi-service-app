import { Module } from '@nestjs/common';
import { AdminGroupPermissionService } from './admin-group-permission.service';
import { AdminGroupPermissionController } from './admin-group-permission.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminGroupPermission } from './entities/admin-group-permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminGroupPermission])],
  controllers: [AdminGroupPermissionController],
  providers: [AdminGroupPermissionService],
})
export class AdminGroupPermissionModule {}