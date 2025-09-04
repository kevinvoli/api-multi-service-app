import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderStatusLogDto } from './create-order-status-log.dto';

export class UpdateOrderStatusLogDto extends PartialType(CreateOrderStatusLogDto) {}
