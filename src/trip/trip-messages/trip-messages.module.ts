import { Module } from '@nestjs/common';
import { TripMessagesService } from './trip-messages.service';
import { TripMessagesController } from './trip-messages.controller';

@Module({
  controllers: [TripMessagesController],
  providers: [TripMessagesService],
})
export class TripMessagesModule {}
