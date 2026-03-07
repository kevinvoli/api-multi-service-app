import { Module } from '@nestjs/common';
import { CancelReason } from './entities/cancel-reason.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CancelReasonService } from './cancel-reason.service';
import { CancelReasonController } from './cancel-reason.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CancelReason])],
  controllers: [CancelReasonController],
  providers: [CancelReasonService],
  exports: [TypeOrmModule.forFeature([CancelReason])],
})
export class CancelReasonModule {}
