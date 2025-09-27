import { IsEnum, IsNotEmpty, IsNumber, IsString, IsOptional, IsCreditCard } from "class-validator";

export class CreateUserPaymentInfoDto {
    @IsNumber()
    @IsNotEmpty()
    iMemberId: number;

    @IsEnum(["Passenger", "Driver"])
    @IsNotEmpty()
    eUserType: "Passenger" | "Driver";

    @IsString()
    @IsNotEmpty()
    tCardToken: string;

    @IsString()
    @IsNotEmpty()
    tAuthId: string;

    @IsCreditCard()
    @IsNotEmpty()
    tCardNum: string;

    @IsString()
    @IsNotEmpty()
    vCardBrand: string;

    @IsString()
    @IsNotEmpty()
    vPaymentMethod: string;

    @IsString()
    @IsNotEmpty()
    tPaymentDetails: string;

    @IsOptional()
    @IsEnum(["Active", "Deleted"])
    eStatus?: "Active" | "Deleted";

    @IsOptional()
    @IsEnum(["Yes", "No"])
    eDefault?: "Yes" | "No";

    @IsEnum(["Test", "Live"])
    @IsNotEmpty()
    ePaymentEnv: "Test" | "Live";
}
