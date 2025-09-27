import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateAdminLocationDto {
  @ApiProperty({
    description: "The ID of the admin",
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  adminId: number;

  @ApiProperty({
    description: "The ID of the location",
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  locationId: number;
}