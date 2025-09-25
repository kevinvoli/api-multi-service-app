import { PartialType } from '@nestjs/mapped-types';
import { CreateHomeContentFoodDto } from './create-home-content-food.dto';

export class UpdateHomeContentFoodDto extends PartialType(CreateHomeContentFoodDto) {}
