import { PartialType } from '@nestjs/mapped-types';
import { CreateUserProfileMasterDto } from './create-user-profile-master.dto';

export class UpdateUserProfileMasterDto extends PartialType(CreateUserProfileMasterDto) {}
