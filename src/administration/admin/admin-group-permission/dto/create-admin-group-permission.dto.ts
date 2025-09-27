import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateAdminGroupPermissionDto {
  @ApiProperty({
    description: "The ID of the group",
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  groupId: number;

  @ApiProperty({
    description: "The ID of the permission",
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  permissionId: number;
}