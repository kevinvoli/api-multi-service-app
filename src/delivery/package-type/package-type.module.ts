import { Module } from '@nestjs/common';
import { PackageTypeService } from './package-type.service';
import { PackageTypeController } from './package-type.controller';

@Module({
  controllers: [PackageTypeController],
  providers: [PackageTypeService],
})
export class PackageTypeModule {}
