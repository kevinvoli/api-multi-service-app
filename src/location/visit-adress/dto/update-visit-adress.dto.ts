import { PartialType } from '@nestjs/mapped-types';
import { CreateVisitAdressDto } from './create-visit-adress.dto';

export class UpdateVisitAdressDto extends PartialType(CreateVisitAdressDto) {}
