import { PartialType } from '@nestjs/mapped-types';
import { CreateFoodMenuImageDto } from './create-food-menu-image.dto';

export class UpdateFoodMenuImageDto extends PartialType(CreateFoodMenuImageDto) {}
