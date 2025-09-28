import { Module } from '@nestjs/common';
import { RentalPackageService } from './rental-package.service';
import { RentalPackageController } from './rental-package.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentalPackage } from './entities/rental-package.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RentalPackage])],
  controllers: [RentalPackageController],
  providers: [RentalPackageService],
})
export class RentalPackageModule {}
