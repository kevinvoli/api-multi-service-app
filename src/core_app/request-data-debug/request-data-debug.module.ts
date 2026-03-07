import { Module } from '@nestjs/common';
import { RequestDataDebug } from './entities/request-data-debug.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestDataDebugService } from './request-data-debug.service';
import { RequestDataDebugController } from './request-data-debug.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RequestDataDebug])],
  controllers: [RequestDataDebugController],
  providers: [RequestDataDebugService],
  exports: [TypeOrmModule.forFeature([RequestDataDebug])],
})
export class RequestDataDebugModule {}
