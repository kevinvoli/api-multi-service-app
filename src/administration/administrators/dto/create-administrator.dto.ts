import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsOptional, IsNumber, IsEnum, MaxLength, IsLatitude, IsLongitude, IsBIC } from "class-validator";

export class CreateAdministratorDto {
  @ApiProperty({ description: "Group ID", example: 1, required: false })
  @IsNumber()
  @IsOptional()
  iGroupId?: number;

  @ApiProperty({ description: "First Name", example: "John" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  vFirstName: string;

  @ApiProperty({ description: "Last Name", example: "Doe" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  vLastName: string;

  @ApiProperty({ description: "Email Address", example: "john.doe@example.com" })
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(255)
  vEmail: string;

  @ApiProperty({ description: "Contact Number", example: "+1234567890" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  vContactNo: string;

  @ApiProperty({ description: "Code", example: "JD001" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  vCode: string;

  @ApiProperty({ description: "Password", example: "strongPassword123" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  vPassword: string;

  @ApiProperty({ description: "Country", example: "USA" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  vCountry: string;

  @ApiProperty({ description: "State", example: "California" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  vState: string;

  @ApiProperty({ description: "City", example: "Los Angeles" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  vCity: string;

  @ApiProperty({ description: "Address", example: "123 Main St" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  vAddress: string;

  @ApiProperty({ description: "Address Latitude", example: "34.052235" })
  @IsLatitude()
  @IsNotEmpty()
  @MaxLength(255)
  vAddressLat: string;

  @ApiProperty({ description: "Address Longitude", example: "-118.243683" })
  @IsLongitude()
  @IsNotEmpty()
  @MaxLength(255)
  vAddressLong: string;

  @ApiProperty({ description: "Hotel Service Charge", example: 10.5 })
  @IsNumber()
  @IsNotEmpty()
  fHotelServiceCharge: number;

  @ApiProperty({ description: "Payment Email", example: "payment@example.com" })
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(255)
  vPaymentEmail: string;

  @ApiProperty({ description: "Bank Account Holder Name", example: "John Doe" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  vBankAccountHolderName: string;

  @ApiProperty({ description: "Account Number", example: "123456789" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  vAccountNumber: string;

  @ApiProperty({ description: "Bank Name", example: "Bank of America" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  vBankName: string;

  @ApiProperty({ description: "Bank Location", example: "Los Angeles, CA" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  vBankLocation: string;

  @ApiProperty({ description: "BIC/SWIFT Code", example: "BOFAUS3N" })
  @IsBIC()
  @IsNotEmpty()
  vBicSwiftCode: string;

  @ApiProperty({ description: "Status", enum: ["Active", "Inactive", "Deleted"], default: "Active", required: false })
  @IsEnum(["Active", "Inactive", "Deleted"])
  @IsOptional()
  eStatus?: "Active" | "Inactive" | "Deleted";

  @ApiProperty({ description: "Is Default Admin", enum: ["Yes", "No"], default: "No", required: false })
  @IsEnum(["Yes", "No"])
  @IsOptional()
  eDefault?: "Yes" | "No";
}