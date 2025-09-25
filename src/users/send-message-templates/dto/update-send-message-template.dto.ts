import { PartialType } from '@nestjs/mapped-types';
import { CreateSendMessageTemplateDto } from './create-send-message-template.dto';

export class UpdateSendMessageTemplateDto extends PartialType(CreateSendMessageTemplateDto) {}
