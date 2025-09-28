import { Module } from '@nestjs/common';
import { CompanyCuisineService } from './company-cuisine.service';
import { CompanyCuisineController } from './company-cuisine.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyCuisine } from './entities/company-cuisine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyCuisine])],
  controllers: [CompanyCuisineController],
  providers: [CompanyCuisineService],
})
export class CompanyCuisineModule {}
