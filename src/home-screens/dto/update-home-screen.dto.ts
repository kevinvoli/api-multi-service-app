import { PartialType } from '@nestjs/mapped-types';
import { CreateHomeScreenDto } from './create-home-screen.dto';

export class UpdateHomeScreenDto extends PartialType(CreateHomeScreenDto) {}
