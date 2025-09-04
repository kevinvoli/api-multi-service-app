import { PartialType } from '@nestjs/mapped-types';
import { CreateUserFaveAddressDto } from './create-user-fave-address.dto';

export class UpdateUserFaveAddressDto extends PartialType(CreateUserFaveAddressDto) {}
