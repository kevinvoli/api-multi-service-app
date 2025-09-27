import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDriverDocDto {
    @IsNumber()
    @IsNotEmpty()
    iDriverDocId: number;

    @IsNumber()
    @IsNotEmpty()
    iDriverId: number;

    @IsString()
    @IsNotEmpty()
    vLicence: string;

    @IsString()
    @IsNotEmpty()
    vNoc: string;

    @IsString()
    @IsNotEmpty()
    vCerti: string;
}
