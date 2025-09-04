import { Module } from '@nestjs/common';
import { DriverPreferencesService } from './driver-preferences.service';
import { DriverPreferencesController } from './driver-preferences.controller';

@Module({
  controllers: [DriverPreferencesController],
  providers: [DriverPreferencesService],
})
export class DriverPreferencesModule {}
