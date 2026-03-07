import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripsStatusMessagesService } from './trips-status-messages.service';
import { TripsStatusMessagesController } from './trips-status-messages.controller';

import { TripStatusMessages } from './entities/trips-status-message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TripStatusMessages])],
  controllers: [TripsStatusMessagesController],
  providers: [TripsStatusMessagesService],
  exports: [TypeOrmModule.forFeature([TripStatusMessages])],
})
export class TripsStatusMessagesModule {}
