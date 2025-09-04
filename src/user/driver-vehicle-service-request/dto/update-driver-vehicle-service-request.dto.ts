import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverVehicleServiceRequestDto } from './create-driver-vehicle-service-request.dto';

export class UpdateDriverVehicleServiceRequestDto extends PartialType(CreateDriverVehicleServiceRequestDto) {}
