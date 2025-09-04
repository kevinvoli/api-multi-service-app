import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverUserMessageDto } from './create-driver-user-message.dto';

export class UpdateDriverUserMessageDto extends PartialType(CreateDriverUserMessageDto) {}
