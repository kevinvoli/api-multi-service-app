import { Module } from '@nestjs/common';
import { TripDeliveryFields } from './entities/trip-delivery-field.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripDeliveryFieldsService } from './trip-delivery-fields.service';
import { TripDeliveryFieldsController } from './trip-delivery-fields.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TripDeliveryFields])],
  controllers: [TripDeliveryFieldsController],
  providers: [TripDeliveryFieldsService],
  exports: [TypeOrmModule.forFeature([TripDeliveryFields])],
})
export class TripDeliveryFieldsModule {}
