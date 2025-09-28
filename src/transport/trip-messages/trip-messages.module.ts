import { Module } from '@nestjs/common';
import { TripMessagesService } from './trip-messages.service';
import { TripMessagesController } from './trip-messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripMessages } from './entities/trip-message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TripMessages])],
  controllers: [TripMessagesController],
  providers: [TripMessagesService],
})
export class TripMessagesModule {}
