import { Module } from '@nestjs/common';
import { MasterServiceMenu } from './entities/master-service-menu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterServiceMenuService } from './master-service-menu.service';
import { MasterServiceMenuController } from './master-service-menu.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MasterServiceMenu])],
  controllers: [MasterServiceMenuController],
  providers: [MasterServiceMenuService],
  exports: [TypeOrmModule.forFeature([MasterServiceMenu])],
})
export class MasterServiceMenuModule {}
