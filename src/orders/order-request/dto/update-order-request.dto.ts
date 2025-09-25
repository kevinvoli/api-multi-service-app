import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderRequestDto } from './create-order-request.dto';

export class UpdateOrderRequestDto extends PartialType(CreateOrderRequestDto) {}
