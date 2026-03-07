import { Module } from '@nestjs/common';
import { Make } from './entities/make.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MakeService } from './make.service';
import { MakeController } from './make.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Make])],
  controllers: [MakeController],
  providers: [MakeService],
  exports: [TypeOrmModule.forFeature([Make])],
})
export class MakeModule {}
