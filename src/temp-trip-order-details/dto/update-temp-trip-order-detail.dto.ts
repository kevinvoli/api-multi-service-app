import { PartialType } from '@nestjs/mapped-types';
import { CreateTempTripOrderDetailDto } from './create-temp-trip-order-detail.dto';

export class UpdateTempTripOrderDetailDto extends PartialType(CreateTempTripOrderDetailDto) {}
