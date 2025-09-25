import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverInsuranceReportDto } from './create-driver-insurance-report.dto';

export class UpdateDriverInsuranceReportDto extends PartialType(CreateDriverInsuranceReportDto) {}
