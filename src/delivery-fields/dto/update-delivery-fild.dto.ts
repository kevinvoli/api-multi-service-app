import { PartialType } from '@nestjs/mapped-types';
import { CreateDeliveryFildDto } from './create-delivery-fild.dto';

export class UpdateDeliveryFildDto extends PartialType(CreateDeliveryFildDto) {}
