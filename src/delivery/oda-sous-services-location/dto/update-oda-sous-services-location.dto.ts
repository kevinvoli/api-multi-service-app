import { PartialType } from '@nestjs/mapped-types';
import { CreateOdaSousServicesLocationDto } from './create-oda-sous-services-location.dto';

export class UpdateOdaSousServicesLocationDto extends PartialType(CreateOdaSousServicesLocationDto) {}
