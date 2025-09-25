import { PartialType } from '@nestjs/mapped-types';
import { CreateAirportsurchargeFareDto } from './create-airportsurcharge-fare.dto';

export class UpdateAirportsurchargeFareDto extends PartialType(CreateAirportsurchargeFareDto) {}
