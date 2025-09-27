import { IsEnum, IsNotEmpty, IsNumber, IsString, IsOptional, IsDateString } from "class-validator";

export class CreateDocumentListDto {
    @IsNumber()
    @IsNotEmpty()
    docMasterid: number;

    @IsEnum(["company", "driver", "car", "store", "trackcompany"])
    @IsNotEmpty()
    docUsertype: "company" | "driver" | "car" | "store" | "trackcompany";

    @IsNumber()
    @IsNotEmpty()
    docUserid: number;

    @IsDateString()
    @IsNotEmpty()
    exDate: string;

    @IsString()
    @IsNotEmpty()
    docFile: string;

    @IsOptional()
    @IsEnum(["Active", "Inactive", "Deleted"])
    status?: "Active" | "Inactive" | "Deleted";

    @IsDateString()
    @IsNotEmpty()
    reqDate: string;

    @IsString()
    @IsNotEmpty()
    reqFile: string;

    @IsDateString()
    @IsNotEmpty()
    lastReminderDate: string;
}
