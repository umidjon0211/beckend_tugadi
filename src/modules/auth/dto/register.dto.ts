import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class RegisterDto {
  @ApiProperty({
    example: '+998939290211',
    description: 'number',
  })
  @IsString()
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    example: '12345',
    description: 'Otp',
  })
  @IsString()
  @IsNotEmpty()
  otp: string

  @ApiProperty({
    example: 'Umidjon',
    description: 'full name',
  })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({
    example: '12345678',
    description: 'password',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
