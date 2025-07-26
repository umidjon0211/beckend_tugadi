import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CreateContactDto {
    @ApiProperty({
        example: 'Umidjon',
        description: 'Full Name',
    })
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @ApiProperty({
        example: '+998939290211',
        description: 'number',
    })
    @IsString()
    @IsPhoneNumber()
    @IsNotEmpty()
    phone: string;

    @ApiProperty({
        example: 'hamasi yashi',
        description: 'Message'
    })
    @IsString()
    message: string
}
