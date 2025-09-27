import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength, IsPhoneNumber } from "class-validator";

export class CreateCompanyDto {
    @IsNumber()
    @IsNotEmpty()
    iServiceId: number;

    @IsString()
    @IsNotEmpty()
    vCompany: string;

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
    vCode: string;

    @IsPhoneNumber()
    @IsNotEmpty()
    vPhone: string;

    @IsString()
    @IsNotEmpty()
    vCaddress: string;

    @IsString()
    @IsNotEmpty()
    vCity: string;

    @IsString()
    @IsNotEmpty()
    vState: string;

    @IsString()
    @IsNotEmpty()
    vZip: string;

    @IsString()
    @IsNotEmpty()
    vLang: string;

    @IsString()
    @IsNotEmpty()
    vCurrencyCompany: string;

    @IsString()
    @IsNotEmpty()
    vTimeZone: string;
}
