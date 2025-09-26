import { IsString, IsEnum, IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

export class CreateNotificationSoundDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  vFileName: string;

  @IsEnum(['User', 'Provider', 'Dial', 'Store', 'Voip'])
  @IsOptional()
  eSoundFor: 'User' | 'Provider' | 'Dial' | 'Store' | 'Voip';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eAdminDisplay: 'Yes' | 'No';

  @IsEnum(['Active', 'Inactive'])
  @IsOptional()
  eStatus: 'Active' | 'Inactive';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eIsSelected: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eDefault: 'Yes' | 'No';
}