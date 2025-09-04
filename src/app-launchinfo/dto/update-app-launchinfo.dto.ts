import { PartialType } from '@nestjs/mapped-types';
import { CreateAppLaunchinfoDto } from './create-app-launchinfo.dto';

export class UpdateAppLaunchinfoDto extends PartialType(CreateAppLaunchinfoDto) {}
