import { Module } from '@nestjs/common';
import { AdminGroupsService } from './admin-groups.service';
import { AdminGroupsController } from './admin-groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminGroups } from './entities/admin-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminGroups])],
  controllers: [AdminGroupsController],
  providers: [AdminGroupsService],
})
export class AdminGroupsModule {}