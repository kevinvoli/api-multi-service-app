import { Module } from '@nestjs/common';
import { PackageTypeService } from './package-type.service';
import { PackageTypeController } from './package-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackageType } from './entities/package-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PackageType])],
  controllers: [PackageTypeController],
  providers: [PackageTypeService],
})
export class PackageTypeModule {}
