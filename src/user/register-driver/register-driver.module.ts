import { Module } from '@nestjs/common';
import { RegisterDriverService } from './register-driver.service';
import { RegisterDriverController } from './register-driver.controller';

@Module({
  controllers: [RegisterDriverController],
  providers: [RegisterDriverService],
})
export class RegisterDriverModule {}
