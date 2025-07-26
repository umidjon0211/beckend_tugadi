import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class LoginDto{
    @ApiProperty({example: '+998939290211'})
    @IsPhoneNumber()
    @IsNotEmpty()
    phone: string

    @ApiProperty({example: 'umidjon0211'})
    @IsString()
    @IsNotEmpty()
    password: string
}