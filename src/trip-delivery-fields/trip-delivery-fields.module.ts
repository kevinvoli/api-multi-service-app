import { Module } from '@nestjs/common';
import { TripDeliveryFieldsService } from './trip-delivery-fields.service';
import { TripDeliveryFieldsController } from './trip-delivery-fields.controller';

@Module({
  controllers: [TripDeliveryFieldsController],
  providers: [TripDeliveryFieldsService],
})
export class TripDeliveryFieldsModule {}
