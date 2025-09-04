import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyCuisineDto } from './create-company-cuisine.dto';

export class UpdateCompanyCuisineDto extends PartialType(CreateCompanyCuisineDto) {}
