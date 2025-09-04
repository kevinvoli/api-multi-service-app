import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDriverLogDto } from './create-order-driver-log.dto';

export class UpdateOrderDriverLogDto extends PartialType(CreateOrderDriverLogDto) {}
