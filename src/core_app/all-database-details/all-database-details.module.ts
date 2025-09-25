import { Module } from '@nestjs/common';
import { AllDatabaseDetailsService } from './all-database-details.service';
import { AllDatabaseDetailsController } from './all-database-details.controller';

@Module({
  controllers: [AllDatabaseDetailsController],
  providers: [AllDatabaseDetailsService],
})
export class AllDatabaseDetailsModule {}
