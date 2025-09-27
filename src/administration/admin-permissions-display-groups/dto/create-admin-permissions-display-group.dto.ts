import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

type StatusType = "Active" | "Inactive" | "Deleted";
const statusEnum = ["Active", "Inactive", "Deleted"];

type EForType =
  | ""
  | "General"
  | "Ride"
  | "Delivery"
  | "UberX"
  | "Multi-Delivery"
  | "DeliverAll"
  | "Kiosk"
  | "Fly"
  | "Ride,Delivery"
  | "Ride,Delivery,UberX"
  | "Ride-Delivery-UberX";

const eForEnum = [
  "", "General", "Ride", "Delivery", "UberX", "Multi-Delivery", "DeliverAll", "Kiosk", "Fly",
  "Ride,Delivery", "Ride,Delivery,UberX", "Ride-Delivery-UberX",
];

export class CreateAdminPermissionsDisplayGroupDto {
  @ApiProperty({
    description: "The name of the display group",
    example: "Driver Management",
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(55)
  name: string;

  @ApiProperty({
    description: "The status of the display group",
    enum: statusEnum,
    default: "Active",
    required: false,
  })
  @IsEnum(statusEnum)
  @IsOptional()
  eStatus?: StatusType;

  @ApiProperty({
    description: "The application type where the group is displayed",
    example: "All",
    default: "All",
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(255)
  vDispalyAppType?: string;

  @ApiProperty({
    description: "The service type this display group is for",
    enum: eForEnum,
    default: "",
    required: false,
  })
  @IsEnum(eForEnum)
  @IsOptional()
  eFor?: EForType;
}