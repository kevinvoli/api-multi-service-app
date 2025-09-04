import { PartialType } from '@nestjs/mapped-types';
import { CreateAppScreenMasterDto } from './create-app-screen-master.dto';

export class UpdateAppScreenMasterDto extends PartialType(CreateAppScreenMasterDto) {}
