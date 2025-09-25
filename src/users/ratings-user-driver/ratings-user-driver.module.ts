import { Module } from '@nestjs/common';
import { RatingsUserDriverService } from './ratings-user-driver.service';
import { RatingsUserDriverController } from './ratings-user-driver.controller';

@Module({
  controllers: [RatingsUserDriverController],
  providers: [RatingsUserDriverService],
})
export class RatingsUserDriverModule {}
