import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverFavoriteDto } from './create-driver-favorite.dto';

export class UpdateDriverFavoriteDto extends PartialType(CreateDriverFavoriteDto) {}
