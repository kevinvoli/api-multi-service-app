import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAdminAlertDto {
  @ApiProperty({
    description: "The text of the alert",
    example: "Driver John Doe is running late.",
  })
  @IsString()
  @IsNotEmpty()
  tAlertText: string;

  @ApiProperty({
    description: "The ID of the company associated with the alert",
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  iCompanyId: number;

  @ApiProperty({
    description: "The ID of the driver associated with the alert",
    example: 123,
  })
  @IsNumber()
  @IsNotEmpty()
  iDriverId: number;

  @ApiProperty({
    description: "The date of the alert",
    example: "2024-07-26T10:00:00.000Z",
  })
  @IsDateString()
  @IsNotEmpty()
  dDate: Date;

  @ApiProperty({
    description: "The status of the alert",
    enum: ["Read", "Unread"],
    example: "Unread",
  })
  @IsEnum(["Read", "Unread"])
  @IsNotEmpty()
  eStatus: "Read" | "Unread";
}