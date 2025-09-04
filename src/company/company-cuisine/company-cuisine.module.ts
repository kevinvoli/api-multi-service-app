import { Module } from '@nestjs/common';
import { CompanyCuisineService } from './company-cuisine.service';
import { CompanyCuisineController } from './company-cuisine.controller';

@Module({
  controllers: [CompanyCuisineController],
  providers: [CompanyCuisineService],
})
export class CompanyCuisineModule {}
