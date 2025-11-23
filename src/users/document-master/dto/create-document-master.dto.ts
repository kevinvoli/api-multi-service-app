import { IsEnum, IsNotEmpty, IsNumber, IsString, IsOptional } from "class-validator";
import { docUsertype, eDocServiceType, eType, exStatus, status } from "../entities/document-master.entity";

export class CreateDocumentMasterDto {

     @IsNumber()
  @IsOptional()
  docMasterid?:number; 

    @IsEnum(["company", "driver", "car", "store"])
    @IsNotEmpty()
    docUsertype: docUsertype;

    @IsString()
    @IsNotEmpty()
    docName: string;

    // @IsString()
    // @IsNotEmpty()
    // countryCode: string;

    @IsEnum(["yes", "no"])
    @IsNotEmpty()
    exStatus: exStatus;

    @IsOptional()
    @IsEnum(["Active", "Inactive", "Deleted"])
    status?: status;

    @IsString()
    @IsNotEmpty()
    docNameEn: string;

    @IsString()
    @IsNotEmpty()
    docNameFr: string;

    @IsOptional()
    @IsEnum(["Ride", "Delivery", "UberX"])
    eType?: eType;

    @IsOptional()
    @IsEnum(["General", "ServiceSpecific", "BiddingSpecific"])
    eDocServiceType?: eDocServiceType;

    @IsOptional()
    @IsNumber()
    iVehicleCategoryId?: number;

    @IsOptional()
    @IsNumber()
    iDisplayOrder?: number;

    @IsNumber()
    @IsNotEmpty()
    iBiddingId?: number;
}
