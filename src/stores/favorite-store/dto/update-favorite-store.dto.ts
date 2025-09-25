import { PartialType } from '@nestjs/mapped-types';
import { CreateFavoriteStoreDto } from './create-favorite-store.dto';

export class UpdateFavoriteStoreDto extends PartialType(CreateFavoriteStoreDto) {}
