import { Module } from '@nestjs/common';
import { TripsStatusMessagesService } from './trips-status-messages.service';
import { TripsStatusMessagesController } from './trips-status-messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripStatusMessages } from './entities/trips-status-message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TripStatusMessages])],
  controllers: [TripsStatusMessagesController],
  providers: [TripsStatusMessagesService],
})
export class TripsStatusMessagesModule {}
