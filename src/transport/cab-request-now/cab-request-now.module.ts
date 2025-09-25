import { Module } from '@nestjs/common';
import { CabRequestNowService } from './cab-request-now.service';
import { CabRequestNowController } from './cab-request-now.controller';

@Module({
  controllers: [CabRequestNowController],
  providers: [CabRequestNowService],
})
export class CabRequestNowModule {}
