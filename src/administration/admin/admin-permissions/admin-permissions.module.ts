import { Module } from '@nestjs/common';
import { AdminPermissionsService } from './admin-permissions.service';
import { AdminPermissionsController } from './admin-permissions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminPermissions } from './entities/admin-permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminPermissions])],
  controllers: [AdminPermissionsController],
  providers: [AdminPermissionsService],
})
export class AdminPermissionsModule {}