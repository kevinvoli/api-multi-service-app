import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestDataDebugService } from './request-data-debug.service';
import { RequestDataDebugController } from './request-data-debug.controller';
import { RequestDataDebug } from './entities/request-data-debug.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RequestDataDebug])],
  controllers: [RequestDataDebugController],
  providers: [RequestDataDebugService],
})
export class RequestDataDebugModule {}
