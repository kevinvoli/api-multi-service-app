import { Module } from '@nestjs/common';
import { RentalPackage } from './entities/rental-package.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentalPackageService } from './rental-package.service';
import { RentalPackageController } from './rental-package.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RentalPackage])],
  controllers: [RentalPackageController],
  providers: [RentalPackageService],
  exports: [TypeOrmModule.forFeature([RentalPackage])],
})
export class RentalPackageModule {}
