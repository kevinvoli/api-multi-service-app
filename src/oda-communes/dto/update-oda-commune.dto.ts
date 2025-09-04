import { PartialType } from '@nestjs/mapped-types';
import { CreateOdaCommuneDto } from './create-oda-commune.dto';

export class UpdateOdaCommuneDto extends PartialType(CreateOdaCommuneDto) {}
