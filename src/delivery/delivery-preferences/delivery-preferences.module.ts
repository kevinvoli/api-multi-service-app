import { Module } from '@nestjs/common';
import { DeliveryPreferencesService } from './delivery-preferences.service';
import { DeliveryPreferencesController } from './delivery-preferences.controller';

@Module({
  controllers: [DeliveryPreferencesController],
  providers: [DeliveryPreferencesService],
})
export class DeliveryPreferencesModule {}
