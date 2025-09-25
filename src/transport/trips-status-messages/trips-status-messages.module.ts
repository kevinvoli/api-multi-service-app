import { Module } from '@nestjs/common';
import { TripsStatusMessagesService } from './trips-status-messages.service';
import { TripsStatusMessagesController } from './trips-status-messages.controller';

@Module({
  controllers: [TripsStatusMessagesController],
  providers: [TripsStatusMessagesService],
})
export class TripsStatusMessagesModule {}
