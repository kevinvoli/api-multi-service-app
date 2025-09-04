import { Module } from '@nestjs/common';
import { DriverUserMessagesService } from './driver-user-messages.service';
import { DriverUserMessagesController } from './driver-user-messages.controller';

@Module({
  controllers: [DriverUserMessagesController],
  providers: [DriverUserMessagesService],
})
export class DriverUserMessagesModule {}
