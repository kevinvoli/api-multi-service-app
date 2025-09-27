import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateDriverFavoriteDto {
    @IsNumber()
    @IsNotEmpty()
    iUserId: number;

    @IsNumber()
    @IsNotEmpty()
    iDriverId: number;

    @IsOptional()
    @IsEnum(["Ride", "Deliver", "UberX", "Multi-Delivery"])
    eType?: "Ride" | "Deliver" | "UberX" | "Multi-Delivery";

    @IsOptional()
    @IsEnum(["Yes", "No"])
    eFavDriver?: "Yes" | "No";
}
