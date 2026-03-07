import { Module } from '@nestjs/common';
import { DriverUserMessages } from './entities/driver-user-message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverUserMessagesService } from './driver-user-messages.service';
import { DriverUserMessagesController } from './driver-user-messages.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DriverUserMessages])],
  controllers: [DriverUserMessagesController],
  providers: [DriverUserMessagesService],
  exports: [TypeOrmModule.forFeature([DriverUserMessages])],
})
export class DriverUserMessagesModule {}
