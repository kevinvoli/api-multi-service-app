import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreFavoriteDto } from './create-store-favorite.dto';

export class UpdateStoreFavoriteDto extends PartialType(CreateStoreFavoriteDto) {}
