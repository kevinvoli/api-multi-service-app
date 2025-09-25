import { Module } from '@nestjs/common';
import { MenuItemMediaService } from './menu-item-media.service';
import { MenuItemMediaController } from './menu-item-media.controller';

@Module({
  controllers: [MenuItemMediaController],
  providers: [MenuItemMediaService],
})
export class MenuItemMediaModule {}
