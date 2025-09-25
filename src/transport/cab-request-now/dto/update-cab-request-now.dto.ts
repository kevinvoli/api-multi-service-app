import { PartialType } from '@nestjs/mapped-types';
import { CreateCabRequestNowDto } from './create-cab-request-now.dto';

export class UpdateCabRequestNowDto extends PartialType(CreateCabRequestNowDto) {}
