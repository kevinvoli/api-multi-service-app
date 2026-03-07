import { Module } from '@nestjs/common';
import { AdminPermissions } from './entities/admin-permission.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminPermissionsService } from './admin-permissions.service';
import { AdminPermissionsController } from './admin-permissions.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AdminPermissions])],
  controllers: [AdminPermissionsController],
  providers: [AdminPermissionsService],
  exports: [TypeOrmModule.forFeature([AdminPermissions])],
})
export class AdminPermissionsModule {}
