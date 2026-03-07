export class AddAddressDto {
  iUserId: number;
  vServiceAddress: string;
  vBuildingNo: string;
  vLandmark: string;
  vAddressType: string;   // 'Home' | 'Work' | 'Other'
  vLatitude: string;
  vLongitude: string;
  vTimeZone?: string;
}
