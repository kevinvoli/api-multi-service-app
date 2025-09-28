import { Module } from '@nestjs/common';
import { RatingsUserDriverService } from './ratings-user-driver.service';
import { RatingsUserDriverController } from './ratings-user-driver.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingsUserDriver } from './entities/ratings-user-driver.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RatingsUserDriver])],
  controllers: [RatingsUserDriverController],
  providers: [RatingsUserDriverService],
})
export class RatingsUserDriverModule {}
