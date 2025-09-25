import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverLogReportDto } from './create-driver-log-report.dto';

export class UpdateDriverLogReportDto extends PartialType(CreateDriverLogReportDto) {}
