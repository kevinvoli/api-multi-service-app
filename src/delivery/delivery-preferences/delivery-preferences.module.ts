import { Module } from '@nestjs/common';
import { DeliveryPreferencesService } from './delivery-preferences.service';
import { DeliveryPreferencesController } from './delivery-preferences.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryPreferences } from './entities/delivery-preference.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryPreferences])],
  controllers: [DeliveryPreferencesController],
  providers: [DeliveryPreferencesService],
})
export class DeliveryPreferencesModule {}
