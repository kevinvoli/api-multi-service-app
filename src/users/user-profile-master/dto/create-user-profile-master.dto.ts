import { IsEnum, IsNotEmpty, IsString, IsOptional } from "class-validator";

export class CreateUserProfileMasterDto {
    @IsString()
    @IsNotEmpty()
    vTitle: string;

    @IsString()
    @IsNotEmpty()
    vSubTitle: string;

    @IsString()
    @IsNotEmpty()
    vScreenHeading: string;

    @IsString()
    @IsNotEmpty()
    vScreenTitle: string;

    @IsString()
    @IsNotEmpty()
    tDescription: string;

    @IsString()
    @IsNotEmpty()
    vScreenButtonText: string;

    @IsString()
    @IsNotEmpty()
    vImage: string;

    @IsString()
    @IsNotEmpty()
    vWelcomeImage: string;

    @IsOptional()
    @IsEnum(["Active", "Inactive", "Deleted"])
    eStatus?: "Active" | "Inactive" | "Deleted";

    @IsString()
    @IsNotEmpty()
    vProfileName: string;

    @IsString()
    @IsNotEmpty()
    vShortProfileName: string;
}
