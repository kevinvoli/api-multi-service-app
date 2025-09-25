import { Module } from '@nestjs/common';
import { HomeScreensService } from './home-screens.service';
import { HomeScreensController } from './home-screens.controller';

@Module({
  controllers: [HomeScreensController],
  providers: [HomeScreensService],
})
export class HomeScreensModule {}
