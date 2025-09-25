import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDeliveryChargeDetailDto } from './create-order-delivery-charge-detail.dto';

export class UpdateOrderDeliveryChargeDetailDto extends PartialType(CreateOrderDeliveryChargeDetailDto) {}
