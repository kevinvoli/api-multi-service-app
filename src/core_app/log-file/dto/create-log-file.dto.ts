import { IsString, IsNumber, IsEnum, IsNotEmpty, MaxLength, IsDate } from 'class-validator';

export class CreateLogFileDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  vLogName: string;

  @IsDate()
  @IsNotEmpty()
  tDate: Date;

  @IsNumber()
  @IsNotEmpty()
  iCompanyId: number;

  @IsNumber()
  @IsNotEmpty()
  iDriverId: number;

  @IsEnum(['driver', 'company'])
  @IsNotEmpty()
  eUserType: 'driver' | 'company';

  @IsEnum([
    'licence',
    'noc',
    'certificate',
    'insurance',
    'permit',
    'registeration',
  ])
  @IsNotEmpty()
  eType:
    | 'licence'
    | 'noc'
    | 'certificate'
    | 'insurance'
    | 'permit'
    | 'registeration';
}