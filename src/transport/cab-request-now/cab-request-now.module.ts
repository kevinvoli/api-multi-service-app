import { Module } from '@nestjs/common';
import { CabRequestNowService } from './cab-request-now.service';
import { CabRequestNowController } from './cab-request-now.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CabRequestNow } from './entities/cab-request-now.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CabRequestNow])],
  controllers: [CabRequestNowController],
  providers: [CabRequestNowService],
})
export class CabRequestNowModule {}
