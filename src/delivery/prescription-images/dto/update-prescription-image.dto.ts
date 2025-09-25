import { PartialType } from '@nestjs/mapped-types';
import { CreatePrescriptionImageDto } from './create-prescription-image.dto';

export class UpdatePrescriptionImageDto extends PartialType(CreatePrescriptionImageDto) {}
