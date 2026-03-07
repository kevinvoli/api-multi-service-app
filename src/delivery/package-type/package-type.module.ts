import { Module } from '@nestjs/common';
import { PackageType } from './entities/package-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackageTypeService } from './package-type.service';
import { PackageTypeController } from './package-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PackageType])],
  controllers: [PackageTypeController],
  providers: [PackageTypeService],
  exports: [TypeOrmModule.forFeature([PackageType])],
})
export class PackageTypeModule {}
