import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator";

export class ResetPasswordDto {
    @ApiProperty({ example: '+998939290211' })
    @IsString()
    @IsNotEmpty()
    @IsPhoneNumber()
    phone: string;

    @ApiProperty({ example: '12345' })
    @IsNumber()
    otp_code: number;

    @ApiProperty({ example: 'new pasword' })
    @IsString()
    password: string;
}
