import { Module } from '@nestjs/common';
import { DriverPreferencesService } from './driver-preferences.service';
import { DriverPreferencesController } from './driver-preferences.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverPreferences } from './entities/driver-preference.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriverPreferences])],
  controllers: [DriverPreferencesController],
  providers: [DriverPreferencesService],
})
export class DriverPreferencesModule {}
