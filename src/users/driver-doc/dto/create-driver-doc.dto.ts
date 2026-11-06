import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateDriverDocDto {
  // driver_doc.iDriverDocId n'est pas AUTO_INCREMENT dans le schéma legacy
  @IsInt()
  @IsNotEmpty()
  iDriverDocId: number;

  @IsInt()
  @IsNotEmpty()
  iDriverId: number;

  @IsString()
  @MaxLength(500)
  vLicence: string;

  @IsString()
  @MaxLength(500)
  vNoc: string;

  @IsString()
  @MaxLength(500)
  vCerti: string;
}
