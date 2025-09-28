import { Module } from '@nestjs/common';
import { CompanyRequestService } from './company-request.service';
import { CompanyRequestController } from './company-request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyRequest } from './entities/company-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyRequest])],
  controllers: [CompanyRequestController],
  providers: [CompanyRequestService],
})
export class CompanyRequestModule {}
