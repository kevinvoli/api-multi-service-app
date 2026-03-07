import { Module } from '@nestjs/common';
import { DriverPreferences } from './entities/driver-preference.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverPreferencesService } from './driver-preferences.service';
import { DriverPreferencesController } from './driver-preferences.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DriverPreferences])],
  controllers: [DriverPreferencesController],
  providers: [DriverPreferencesService],
  exports: [TypeOrmModule.forFeature([DriverPreferences])],
})
export class DriverPreferencesModule {}
