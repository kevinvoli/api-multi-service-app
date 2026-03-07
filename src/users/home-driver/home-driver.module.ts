import { Module } from '@nestjs/common';
import { HomeDriver } from './entities/home-driver.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeDriverService } from './home-driver.service';
import { HomeDriverController } from './home-driver.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HomeDriver])],
  controllers: [HomeDriverController],
  providers: [HomeDriverService],
  exports: [TypeOrmModule.forFeature([HomeDriver])],
})
export class HomeDriverModule {}
