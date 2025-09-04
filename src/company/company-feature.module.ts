import { Module } from '@nestjs/common';
import { CompanyModule } from './company/company.module';
import { CompanyCuisineModule } from './company-cuisine/company-cuisine.module';
import { CompanyRequestModule } from './company-request/company-request.module';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [
    CompanyModule,
    CompanyCuisineModule,
    CompanyRequestModule,
    OrganizationModule,
  ],
  exports: [
    CompanyModule,
    CompanyCuisineModule,
    CompanyRequestModule,
    OrganizationModule,
  ],
})
export class CompanyFeatureModule {}
