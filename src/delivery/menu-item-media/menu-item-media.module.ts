import { Module } from '@nestjs/common';
import { MenuItemMedia } from './entities/menu-item-media.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuItemMediaService } from './menu-item-media.service';
import { MenuItemMediaController } from './menu-item-media.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MenuItemMedia])],
  controllers: [MenuItemMediaController],
  providers: [MenuItemMediaService],
  exports: [TypeOrmModule.forFeature([MenuItemMedia])],
})
export class MenuItemMediaModule {}
