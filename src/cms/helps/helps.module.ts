import { Module } from '@nestjs/common';
import { HelpsService } from './helps.service';
import { HelpsController } from './helps.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Helps } from './entities/help.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Helps])],
  controllers: [HelpsController],
  providers: [HelpsService],
})
export class HelpsModule {}