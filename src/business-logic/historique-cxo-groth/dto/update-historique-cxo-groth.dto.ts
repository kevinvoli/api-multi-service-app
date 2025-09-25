import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoriqueCxoGrothDto } from './create-historique-cxo-groth.dto';

export class UpdateHistoriqueCxoGrothDto extends PartialType(CreateHistoriqueCxoGrothDto) {}
