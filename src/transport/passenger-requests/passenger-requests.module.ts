import { Module } from '@nestjs/common';
import { PassengerRequests } from './entities/passenger-request.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassengerRequestsService } from './passenger-requests.service';
import { PassengerRequestsController } from './passenger-requests.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PassengerRequests])],
  controllers: [PassengerRequestsController],
  providers: [PassengerRequestsService],
  exports: [TypeOrmModule.forFeature([PassengerRequests])],
})
export class PassengerRequestsModule {}
