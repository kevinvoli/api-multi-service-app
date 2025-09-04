import { PartialType } from '@nestjs/mapped-types';
import { CreateIdproofImageDto } from './create-idproof-image.dto';

export class UpdateIdproofImageDto extends PartialType(CreateIdproofImageDto) {}
