import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAdminGroupDto {
  @ApiProperty({
    description: "The name of the group",
    example: "Super Admins",
  })
  @IsString()
  @IsNotEmpty()
  vGroup: string;

  @ApiProperty({
    description: "The status of the group",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
    required: false,
  })
  @IsEnum(["Active", "Inactive", "Deleted"])
  @IsOptional()
  eStatus?: "Active" | "Inactive" | "Deleted";
}