import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterServiceMenuService } from './master-service-menu.service';
import { MasterServiceMenuController } from './master-service-menu.controller';
import { MasterServiceMenu } from './entities/master-service-menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MasterServiceMenu])],
  controllers: [MasterServiceMenuController],
  providers: [MasterServiceMenuService],
})
export class MasterServiceMenuModule {}
