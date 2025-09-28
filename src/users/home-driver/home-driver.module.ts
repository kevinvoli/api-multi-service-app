import { Module } from '@nestjs/common';
import { HomeDriverService } from './home-driver.service';
import { HomeDriverController } from './home-driver.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeDriver } from './entities/home-driver.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HomeDriver])],
  controllers: [HomeDriverController],
  providers: [HomeDriverService],
})
export class HomeDriverModule {}
