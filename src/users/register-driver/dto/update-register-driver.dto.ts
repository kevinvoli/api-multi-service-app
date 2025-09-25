import { PartialType } from '@nestjs/mapped-types';
import { CreateRegisterDriverDto } from './create-register-driver.dto';

export class UpdateRegisterDriverDto extends PartialType(CreateRegisterDriverDto) {}
