import { Module } from '@nestjs/common';
import { DeliveryPreferences } from './entities/delivery-preference.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryPreferencesService } from './delivery-preferences.service';
import { DeliveryPreferencesController } from './delivery-preferences.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryPreferences])],
  controllers: [DeliveryPreferencesController],
  providers: [DeliveryPreferencesService],
  exports: [TypeOrmModule.forFeature([DeliveryPreferences])],
})
export class DeliveryPreferencesModule {}
