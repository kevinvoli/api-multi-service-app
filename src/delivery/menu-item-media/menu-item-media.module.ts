import { Module } from '@nestjs/common';
import { MenuItemMediaService } from './menu-item-media.service';
import { MenuItemMediaController } from './menu-item-media.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuItemMedia } from './entities/menu-item-media.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenuItemMedia])],
  controllers: [MenuItemMediaController],
  providers: [MenuItemMediaService],
})
export class MenuItemMediaModule {}
