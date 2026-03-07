import { Module } from '@nestjs/common';
import { SetupInfo } from './entities/setup-info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetupInfoService } from './setup-info.service';
import { SetupInfoController } from './setup-info.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SetupInfo])],
  controllers: [SetupInfoController],
  providers: [SetupInfoService],
  exports: [TypeOrmModule.forFeature([SetupInfo])],
})
export class SetupInfoModule {}
