import { PartialType } from '@nestjs/mapped-types';
import { CreateFlyLocationWiseFareDto } from './create-fly-location-wise-fare.dto';

export class UpdateFlyLocationWiseFareDto extends PartialType(CreateFlyLocationWiseFareDto) {}
