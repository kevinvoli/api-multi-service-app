import { IsEnum, IsNotEmpty, IsNumber, IsString, IsOptional, IsLatitude, IsLongitude } from "class-validator";

export class CreateUserAddressDto {
    @IsNumber()
    @IsNotEmpty()
    iUserId: number;

    @IsEnum(["Driver", "Rider"])
    @IsNotEmpty()
    eUserType: "Driver" | "Rider";

    @IsString()
    @IsNotEmpty()
    vServiceAddress: string;

    @IsString()
    @IsNotEmpty()
    vBuildingNo: string;

    @IsString()
    @IsNotEmpty()
    vLandmark: string;

    @IsString()
    @IsNotEmpty()
    vAddressType: string;

    @IsLatitude()
    @IsNotEmpty()
    vLatitude: string;

    @IsLongitude()
    @IsNotEmpty()
    vLongitude: string;

    @IsString()
    @IsNotEmpty()
    vTimeZone: string;

    @IsOptional()
    @IsEnum(["Active", "Inactive", "Deleted"])
    eStatus?: "Active" | "Inactive" | "Deleted";
}
