import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserReferrerTransactionDto {
    @IsNumber()
    @IsNotEmpty()
    iMemberId: number;

    @IsEnum(["Rider", "Driver"])
    @IsNotEmpty()
    eUserType: "Rider" | "Driver";

    @IsString()
    @IsNotEmpty()
    tReferrerInfo: string;
}
