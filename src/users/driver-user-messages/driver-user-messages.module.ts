import { Module } from '@nestjs/common';
import { DriverUserMessagesService } from './driver-user-messages.service';
import { DriverUserMessagesController } from './driver-user-messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverUserMessages } from './entities/driver-user-message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriverUserMessages])],
  controllers: [DriverUserMessagesController],
  providers: [DriverUserMessagesService],
})
export class DriverUserMessagesModule {}
