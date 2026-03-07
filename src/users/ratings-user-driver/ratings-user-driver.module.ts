import { Module } from '@nestjs/common';
import { RatingsUserDriver } from './entities/ratings-user-driver.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingsUserDriverService } from './ratings-user-driver.service';
import { RatingsUserDriverController } from './ratings-user-driver.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RatingsUserDriver])],
  controllers: [RatingsUserDriverController],
  providers: [RatingsUserDriverService],
  exports: [TypeOrmModule.forFeature([RatingsUserDriver])],
})
export class RatingsUserDriverModule {}
