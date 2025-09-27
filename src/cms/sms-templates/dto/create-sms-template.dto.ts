import {
  IsString,
  IsOptional,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';

export class CreateSmsTemplateDto {
  @IsOptional()
  @IsString()
  vSmsCode?: string;

  @IsOptional()
  @IsEnum(['Active', 'Inactive'])
  eStatus?: 'Active' | 'Inactive';

  @IsString()
  @IsNotEmpty()
  vBodyFr: string;

  @IsOptional()
  @IsString()
  vBodyEn?: string;

  @IsOptional()
  @IsString()
  vBodyDn?: string;

  @IsOptional()
  @IsString()
  vBodyDa?: string;

  @IsOptional()
  @IsString()
  vBodyIw?: string;

  @IsOptional()
  @IsString()
  vBodyHi?: string;

  @IsOptional()
  @IsString()
  vBodyMy?: string;

  @IsOptional()
  @IsString()
  vBodyFa?: string;

  @IsOptional()
  @IsString()
  vBodyRu?: string;

  @IsOptional()
  @IsString()
  vBodyTr?: string;

  @IsOptional()
  @IsString()
  vBodyYo?: string;

  @IsOptional()
  @IsString()
  vBodyKo?: string;

  @IsOptional()
  @IsString()
  vBodyJa?: string;

  @IsOptional()
  @IsString()
  vBodyMs?: string;

  @IsOptional()
  @IsString()
  vBodyKu?: string;

  @IsOptional()
  @IsString()
  vBodyZu?: string;

  @IsOptional()
  @IsString()
  vBodyId?: string;

  @IsOptional()
  @IsString()
  vBodyAf?: string;

  @IsOptional()
  @IsString()
  vBodyEe?: string;

  @IsOptional()
  @IsString()
  vBodyFi?: string;

  @IsOptional()
  @IsString()
  vBodyFn?: string;

  @IsOptional()
  @IsString()
  vBodyDe?: string;

  @IsOptional()
  @IsString()
  vBodyLv?: string;

  @IsOptional()
  @IsString()
  vBodyLt?: string;

  @IsOptional()
  @IsString()
  vBodyNo?: string;

  @IsOptional()
  @IsString()
  vBodyPo?: string;

  @IsOptional()
  @IsString()
  vBodyRs?: string;

  @IsOptional()
  @IsString()
  vBodyEs?: string;

  @IsOptional()
  @IsString()
  vBodySw?: string;

  @IsOptional()
  @IsString()
  vBodyIt?: string;

  @IsOptional()
  @IsString()
  vBodyAr?: string;

  @IsOptional()
  @IsString()
  vBodyPs?: string;

  @IsOptional()
  @IsString()
  vBodyNl?: string;

  @IsOptional()
  @IsString()
  vBodyAz?: string;

  @IsOptional()
  @IsString()
  vBodyBg?: string;

  @IsOptional()
  @IsString()
  vBodyZh?: string;

  @IsOptional()
  @IsString()
  vBodyHr?: string;

  @IsOptional()
  @IsString()
  vBodyCs?: string;

  @IsOptional()
  @IsString()
  vBodyHu?: string;

  @IsOptional()
  @IsString()
  vBodyTs?: string;

  @IsOptional()
  @IsString()
  vBodyHw?: string;

  @IsOptional()
  @IsString()
  vBodyEl?: string;

  @IsOptional()
  @IsString()
  vBodyTh?: string;

  @IsOptional()
  @IsString()
  vBodyUr?: string;

  @IsOptional()
  @IsString()
  vBodyPt?: string;

  @IsOptional()
  @IsString()
  vBodySi?: string;

  @IsOptional()
  @IsString()
  vBodyTa?: string;

  @IsOptional()
  @IsString()
  vBodyVi?: string;

  @IsOptional()
  @IsString()
  vBodyTl?: string;

  @IsOptional()
  @IsString()
  vBodyKm?: string;

  @IsOptional()
  @IsString()
  vBodyBn?: string;
}