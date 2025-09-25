import { PartialType } from '@nestjs/mapped-types';
import { CreateRentalPackageDto } from './create-rental-package.dto';

export class UpdateRentalPackageDto extends PartialType(CreateRentalPackageDto) {}
