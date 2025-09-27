import { Module } from '@nestjs/common';
import { RegisterDriverService } from './register-driver.service';
import { RegisterDriverController } from './register-driver.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterDriver } from './entities/register-driver.entity';
import { Trips } from 'src/transport/trips/entities/trip.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegisterDriver,Trips])],
  controllers: [RegisterDriverController],
  providers: [RegisterDriverService],
})
export class RegisterDriverModule {}
