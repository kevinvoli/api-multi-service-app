import { Module } from '@nestjs/common';
import { HomeScreens } from './entities/home-screen.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeScreensService } from './home-screens.service';
import { HomeScreensController } from './home-screens.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HomeScreens])],
  controllers: [HomeScreensController],
  providers: [HomeScreensService],
  exports: [TypeOrmModule.forFeature([HomeScreens])],
})
export class HomeScreensModule {}
