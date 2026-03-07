import { Module } from '@nestjs/common';
import { RegisterDriver } from './entities/register-driver.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterDriverService } from './register-driver.service';
import { RegisterDriverController } from './register-driver.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RegisterDriver])],
  controllers: [RegisterDriverController],
  providers: [RegisterDriverService],
  exports: [TypeOrmModule.forFeature([RegisterDriver])],
})
export class RegisterDriverModule {}
