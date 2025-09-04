import { PartialType } from '@nestjs/mapped-types';
import { CreateLocationWiseFareDto } from './create-location-wise-fare.dto';

export class UpdateLocationWiseFareDto extends PartialType(CreateLocationWiseFareDto) {}
