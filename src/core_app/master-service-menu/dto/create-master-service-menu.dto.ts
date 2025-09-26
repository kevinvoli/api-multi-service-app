import { IsString, IsNumber, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateMasterServiceMenuDto {
  @IsString()
  @IsNotEmpty()
  vTitle: string;

  @IsNumber()
  @IsNotEmpty()
  iParentId: number;

  @IsEnum([
    'Ride',
    'Deliver',
    'DeliverAll',
    'UberX',
    'Bidding',
    'VideoConsult',
    'MedicalServices',
  ])
  @IsNotEmpty()
  eType:
    | 'Ride'
    | 'Deliver'
    | 'DeliverAll'
    | 'UberX'
    | 'Bidding'
    | 'VideoConsult'
    | 'MedicalServices';

  @IsNumber()
  @IsNotEmpty()
  iServiceId: number;

  @IsEnum(['Active', 'Inactive', 'Deleted'])
  @IsNotEmpty()
  eStatus: 'Active' | 'Inactive' | 'Deleted';

  @IsNumber()
  @IsNotEmpty()
  iDisplayOrder: number;
}