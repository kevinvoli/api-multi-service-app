import { Module } from '@nestjs/common';
import { CompanyCuisine } from './entities/company-cuisine.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyCuisineService } from './company-cuisine.service';
import { CompanyCuisineController } from './company-cuisine.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyCuisine])],
  controllers: [CompanyCuisineController],
  providers: [CompanyCuisineService],
  exports: [TypeOrmModule.forFeature([CompanyCuisine])],
})
export class CompanyCuisineModule {}
