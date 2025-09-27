import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength, IsOptional, IsPhoneNumber } from "class-validator";

export class CreateRegisterUserDto {
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

    @IsPhoneNumber()
    @IsNotEmpty()
    vPhone: string;

    @IsString()
    @IsNotEmpty()
    vPhoneCode: string;

    @IsString()
    @IsNotEmpty()
    vLang: string;

    @IsString()
    @IsNotEmpty()
    vCurrencyPassenger: string;

    @IsString()
    @IsNotEmpty()
    vTimeZone: string;

    @IsEnum(["Android", "Ios"])
    @IsNotEmpty()
    eDeviceType: "Android" | "Ios";

    @IsOptional()
    @IsEnum(["Normal", "Facebook", "Twitter", "Google", "Apple"])
    eSignUpType?: "Normal" | "Facebook" | "Twitter" | "Google" | "Apple";
}
