import { IsEnum, IsNotEmpty, IsNumber, IsString, IsOptional } from "class-validator";

export class CreateDocumentMasterDto {
    @IsEnum(["company", "driver", "car", "store"])
    @IsNotEmpty()
    docUsertype: "company" | "driver" | "car" | "store";

    @IsString()
    @IsNotEmpty()
    docName: string;

    @IsString()
    @IsNotEmpty()
    country: string;

    @IsEnum(["yes", "no"])
    @IsNotEmpty()
    exStatus: "yes" | "no";

    @IsOptional()
    @IsEnum(["Active", "Inactive", "Deleted"])
    status?: "Active" | "Inactive" | "Deleted";

    @IsString()
    @IsNotEmpty()
    docNameEn: string;

    @IsString()
    @IsNotEmpty()
    docNameFr: string;

    @IsOptional()
    @IsEnum(["Ride", "Delivery", "UberX"])
    eType?: "Ride" | "Delivery" | "UberX";

    @IsOptional()
    @IsEnum(["General", "ServiceSpecific", "BiddingSpecific"])
    eDocServiceType?: "General" | "ServiceSpecific" | "BiddingSpecific";

    @IsOptional()
    @IsNumber()
    iVehicleCategoryId?: number;

    @IsOptional()
    @IsNumber()
    iDisplayOrder?: number;

    @IsNumber()
    @IsNotEmpty()
    iBiddingId: number;
}
