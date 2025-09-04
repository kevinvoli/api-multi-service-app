import { Module } from '@nestjs/common';
import { HomeDriverService } from './home-driver.service';
import { HomeDriverController } from './home-driver.controller';

@Module({
  controllers: [HomeDriverController],
  providers: [HomeDriverService],
})
export class HomeDriverModule {}
