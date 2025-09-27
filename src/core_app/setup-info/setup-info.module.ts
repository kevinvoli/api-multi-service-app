import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetupInfoService } from './setup-info.service';
import { SetupInfoController } from './setup-info.controller';
import { SetupInfo } from './entities/setup-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SetupInfo])],
  controllers: [SetupInfoController],
  providers: [SetupInfoService],
})
export class SetupInfoModule {}
