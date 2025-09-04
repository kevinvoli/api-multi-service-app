import { Module } from '@nestjs/common';
import { CompanyRequestService } from './company-request.service';
import { CompanyRequestController } from './company-request.controller';

@Module({
  controllers: [CompanyRequestController],
  providers: [CompanyRequestService],
})
export class CompanyRequestModule {}
