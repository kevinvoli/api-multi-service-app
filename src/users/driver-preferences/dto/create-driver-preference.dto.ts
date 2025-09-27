import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateDriverPreferenceDto {
    @IsNumber()
    @IsNotEmpty()
    iPreferenceId: number;

    @IsNumber()
    @IsNotEmpty()
    iDriverId: number;

    @IsOptional()
    @IsEnum(["Yes", "No"])
    eType?: "Yes" | "No";
}
