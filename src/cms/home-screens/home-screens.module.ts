import { Module } from '@nestjs/common';
import { HomeScreensService } from './home-screens.service';
import { HomeScreensController } from './home-screens.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeScreens } from './entities/home-screen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HomeScreens])],
  controllers: [HomeScreensController],
  providers: [HomeScreensService],
})
export class HomeScreensModule {}