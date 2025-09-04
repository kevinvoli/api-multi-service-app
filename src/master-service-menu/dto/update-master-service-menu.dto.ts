import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterServiceMenuDto } from './create-master-service-menu.dto';

export class UpdateMasterServiceMenuDto extends PartialType(CreateMasterServiceMenuDto) {}
