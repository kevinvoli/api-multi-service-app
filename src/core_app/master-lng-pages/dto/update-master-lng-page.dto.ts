import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterLngPageDto } from './create-master-lng-page.dto';

export class UpdateMasterLngPageDto extends PartialType(CreateMasterLngPageDto) {}
