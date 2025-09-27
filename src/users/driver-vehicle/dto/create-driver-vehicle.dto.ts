import { IsEnum, IsNotEmpty, IsNumber, IsString, IsOptional } from "class-validator";

export class CreateDriverVehicleDto {
    @IsNumber()
    @IsNotEmpty()
    iDriverId: number;

    @IsNumber()
    @IsNotEmpty()
    iCompanyId: number;

    @IsNumber()
    @IsNotEmpty()
    iMakeId: number;

    @IsNumber()
    @IsNotEmpty()
    iModelId: number;

    @IsNumber()
    @IsNotEmpty()
    iYear: number;

    @IsString()
    @IsNotEmpty()
    vLicencePlate: string;

    @IsString()
    @IsNotEmpty()
    vColour: string;

    @IsString()
    @IsNotEmpty()
    vCarType: string;

    @IsOptional()
    @IsString()
    vRentalCarType?: string;

    @IsEnum(["Yes", "No"])
    @IsOptional()
    eHandiCapAccessibility?: "Yes" | "No";

    @IsEnum(["Yes", "No"])
    @IsOptional()
    eChildSeatAvailable?: "Yes" | "No";

    @IsEnum(["Yes", "No"])
    @IsOptional()
    eWheelChairAvailable?: "Yes" | "No";

    @IsEnum(["Ride", "Delivery", "UberX", "TrackService"])
    @IsNotEmpty()
    eType: "Ride" | "Delivery" | "UberX" | "TrackService";
}
