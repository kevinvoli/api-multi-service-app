import { Module } from '@nestjs/common';
import { PassengerRequestsService } from './passenger-requests.service';
import { PassengerRequestsController } from './passenger-requests.controller';

@Module({
  controllers: [PassengerRequestsController],
  providers: [PassengerRequestsService],
})
export class PassengerRequestsModule {}
