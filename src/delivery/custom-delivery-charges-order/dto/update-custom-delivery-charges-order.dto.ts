import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomDeliveryChargesOrderDto } from './create-custom-delivery-charges-order.dto';

export class UpdateCustomDeliveryChargesOrderDto extends PartialType(CreateCustomDeliveryChargesOrderDto) {}
