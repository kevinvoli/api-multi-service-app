import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

type StatusType = "Active" | "Inactive" | "Deleted";
const statusEnum = ["Active", "Inactive", "Deleted"];

type EForType =
  | ""
  | "General"
  | "Ride"
  | "Delivery"
  | "Ride,Delivery"
  | "UberX"
  | "Ride,Delivery,UberX"
  | "Multi-Delivery"
  | "DeliverAll"
  | "Kiosk"
  | "Fly"
  | "Bidding"
  | "RentItem"
  | "RentEstate"
  | "RentCars"
  | "TrackService"
  | "RideShare"
  | "NearBy";

const eForEnum = [
  "", "General", "Ride", "Delivery", "UberX", "Multi-Delivery", "DeliverAll", "Kiosk", "Fly",
  "Bidding", "RentItem", "RentEstate", "RentCars", "TrackService", "RideShare", "NearBy",
  "Ride,Delivery", "Ride,Delivery,UberX",
];

export class CreateAdminPermissionDto {
  @ApiProperty({
    description: "The name of the permission",
    example: "manage_drivers",
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(55)
  permissionName: string;

  @ApiProperty({
    description: "The status of the permission",
    enum: statusEnum,
    default: "Active",
    required: false,
  })
  @IsEnum(statusEnum)
  @IsOptional()
  status?: StatusType;

  @ApiProperty({
    description: "The ID of the display group for this permission",
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  displayGroupId: number;

  @ApiProperty({
    description: "The display order of the permission within its group",
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  displayOrder: number;

  @ApiProperty({
    description: "The application type where the permission is displayed",
    example: "All",
    default: "All",
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(255)
  vDispalyAppType?: string;

  @ApiProperty({
    description: "The service type this permission is for",
    enum: eForEnum,
    default: "",
    required: false,
  })
  @IsEnum(eForEnum)
  @IsOptional()
  eFor?: EForType;
}