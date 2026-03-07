import { Module } from '@nestjs/common';
import { AdminGroups } from './entities/admin-group.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminGroupsService } from './admin-groups.service';
import { AdminGroupsController } from './admin-groups.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AdminGroups])],
  controllers: [AdminGroupsController],
  providers: [AdminGroupsService],
  exports: [TypeOrmModule.forFeature([AdminGroups])],
})
export class AdminGroupsModule {}
