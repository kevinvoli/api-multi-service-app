import { Module } from '@nestjs/common';
import { Helps } from './entities/help.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelpsService } from './helps.service';
import { HelpsController } from './helps.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Helps])],
  controllers: [HelpsController],
  providers: [HelpsService],
  exports: [TypeOrmModule.forFeature([Helps])],
})
export class HelpsModule {}
