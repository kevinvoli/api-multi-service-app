import { Module } from '@nestjs/common';
import { PassengerRequestsService } from './passenger-requests.service';
import { PassengerRequestsController } from './passenger-requests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassengerRequests } from './entities/passenger-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PassengerRequests])],
  controllers: [PassengerRequestsController],
  providers: [PassengerRequestsService],
})
export class PassengerRequestsModule {}
