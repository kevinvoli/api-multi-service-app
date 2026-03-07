import { Module } from '@nestjs/common';
import { MenuItems } from './entities/menu-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuItemsService } from './menu-items.service';
import { MenuItemsController } from './menu-items.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MenuItems])],
  controllers: [MenuItemsController],
  providers: [MenuItemsService],
  exports: [TypeOrmModule.forFeature([MenuItems])],
})
export class MenuItemsModule {}
