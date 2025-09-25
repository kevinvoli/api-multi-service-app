import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverDestinationsRouteDto } from './create-driver-destinations-route.dto';

export class UpdateDriverDestinationsRouteDto extends PartialType(CreateDriverDestinationsRouteDto) {}
