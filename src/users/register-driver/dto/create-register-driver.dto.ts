import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength, IsOptional, IsPhoneNumber, IsNumber } from "class-validator";

export class CreateRegisterDriverDto {
    @IsNumber()
    @IsNotEmpty()
    iCompanyId: number;

    @IsString()
    @IsNotEmpty()
    vName: string;

    @IsString()
    @IsNotEmpty()
    vLastName: string;

    @IsEmail()
    @IsNotEmpty()
    vEmail: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    vPassword: string;

    @IsString()
    @IsNotEmpty()
    vCountry: string;

    @IsString()
    @IsNotEmpty()
    vCode: string; // Phone code

    @IsPhoneNumber() // Validates phone number based on the country code provided by vCode
    @IsNotEmpty()
    vPhone: string;

    @IsString()
    @IsNotEmpty()
    vLang: string;

    @IsString()
    @IsNotEmpty()
    vCurrencyDriver: string;

    @IsString()
    @IsNotEmpty()
    vTimeZone: string;

    @IsEnum(["Android", "Ios"])
    @IsNotEmpty()
    eDeviceType: "Android" | "Ios";

    @IsOptional()
    @IsEnum(["Normal", "Facebook", "Twitter", "Google", "LinkedIn", "Apple"])
    eSignUpType?: "Normal" | "Facebook" | "Twitter" | "Google" | "LinkedIn" | "Apple";
}
