import { IsEnum, IsNotEmpty, IsNumber, IsString, IsOptional, IsLatitude, IsLongitude } from "class-validator";

export class CreateUserFaveAddressDto {
    @IsNumber()
    @IsNotEmpty()
    iUserId: number;

    @IsEnum(["Driver", "Passenger"])
    @IsNotEmpty()
    eUserType: "Driver" | "Passenger";

    @IsString()
    @IsNotEmpty()
    vAddress: string;

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
    @IsEnum(["Home", "Work"])
    eType?: "Home" | "Work";

    @IsOptional()
    @IsEnum(["Active", "Inactive", "Deleted"])
    eStatus?: "Active" | "Inactive" | "Deleted";
}
