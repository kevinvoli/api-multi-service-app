import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuItemMediaDto } from './create-menu-item-media.dto';

export class UpdateMenuItemMediaDto extends PartialType(CreateMenuItemMediaDto) {}
