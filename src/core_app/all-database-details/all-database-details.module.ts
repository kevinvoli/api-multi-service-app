import { Module } from '@nestjs/common';
import { AllDatabaseDetailsService } from './all-database-details.service';
import { AllDatabaseDetailsController } from './all-database-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AllDatabaseDetails } from './entities/all-database-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AllDatabaseDetails])],
  controllers: [AllDatabaseDetailsController],
  providers: [AllDatabaseDetailsService],
})
export class AllDatabaseDetailsModule {}
