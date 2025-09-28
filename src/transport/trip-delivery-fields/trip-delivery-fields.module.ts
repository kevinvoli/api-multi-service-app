import { Module } from '@nestjs/common';
import { TripDeliveryFieldsService } from './trip-delivery-fields.service';
import { TripDeliveryFieldsController } from './trip-delivery-fields.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripDeliveryFields } from './entities/trip-delivery-field.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TripDeliveryFields])],
  controllers: [TripDeliveryFieldsController],
  providers: [TripDeliveryFieldsService],
})
export class TripDeliveryFieldsModule {}
