import { Module } from '@nestjs/common';
import { CabRequestNow } from './entities/cab-request-now.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CabRequestNowService } from './cab-request-now.service';
import { CabRequestNowController } from './cab-request-now.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CabRequestNow])],
  controllers: [CabRequestNowController],
  providers: [CabRequestNowService],
  exports: [TypeOrmModule.forFeature([CabRequestNow])],
})
export class CabRequestNowModule {}
