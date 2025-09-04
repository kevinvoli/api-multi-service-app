import { PartialType } from '@nestjs/mapped-types';
import { CreateHomeDriverDto } from './create-home-driver.dto';

export class UpdateHomeDriverDto extends PartialType(CreateHomeDriverDto) {}
