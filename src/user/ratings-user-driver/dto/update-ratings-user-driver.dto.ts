import { PartialType } from '@nestjs/mapped-types';
import { CreateRatingsUserDriverDto } from './create-ratings-user-driver.dto';

export class UpdateRatingsUserDriverDto extends PartialType(CreateRatingsUserDriverDto) {}
