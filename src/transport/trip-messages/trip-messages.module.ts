import { Module } from '@nestjs/common';
import { TripMessages } from './entities/trip-message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripMessagesService } from './trip-messages.service';
import { TripMessagesController } from './trip-messages.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TripMessages])],
  controllers: [TripMessagesController],
  providers: [TripMessagesService],
  exports: [TypeOrmModule.forFeature([TripMessages])],
})
export class TripMessagesModule {}
