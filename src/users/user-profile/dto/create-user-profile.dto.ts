import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateUserProfileDto {
    @IsNumber()
    @IsNotEmpty()
    iUserId: number;

    @IsNumber()
    @IsNotEmpty()
    iUserProfileMasterId: number;

    @IsNumber()
    @IsNotEmpty()
    iOrganizationId: number;

    @IsEmail()
    @IsNotEmpty()
    vProfileEmail: string;

    @IsOptional()
    @IsEnum(["Pending", "Active", "Inactive", "Deleted", "Terminate", "Reject"])
    eStatus?: "Pending" | "Active" | "Inactive" | "Deleted" | "Terminate" | "Reject";
}
