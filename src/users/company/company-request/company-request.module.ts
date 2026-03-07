import { Module } from '@nestjs/common';
import { CompanyRequest } from './entities/company-request.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyRequestService } from './company-request.service';
import { CompanyRequestController } from './company-request.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyRequest])],
  controllers: [CompanyRequestController],
  providers: [CompanyRequestService],
  exports: [TypeOrmModule.forFeature([CompanyRequest])],
})
export class CompanyRequestModule {}
