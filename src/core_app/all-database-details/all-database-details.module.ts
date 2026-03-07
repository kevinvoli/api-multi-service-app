import { Module } from '@nestjs/common';
import { AllDatabaseDetails } from './entities/all-database-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AllDatabaseDetailsService } from './all-database-details.service';
import { AllDatabaseDetailsController } from './all-database-details.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AllDatabaseDetails])],
  controllers: [AllDatabaseDetailsController],
  providers: [AllDatabaseDetailsService],
  exports: [TypeOrmModule.forFeature([AllDatabaseDetails])],
})
export class AllDatabaseDetailsModule {}
