import { IsEnum, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, IsOptional } from "class-validator";

export class CreateUserEmergencyContactDto {
    @IsNumber()
    @IsNotEmpty()
    iUserId: number;

    @IsString()
    @IsNotEmpty()
    vName: string;

    @IsPhoneNumber() // Use null to validate against any region
    @IsNotEmpty()
    vPhone: string;

    @IsOptional()
    @IsEnum(["Passenger", "Driver"])
    eUserType?: "Passenger" | "Driver";
}
