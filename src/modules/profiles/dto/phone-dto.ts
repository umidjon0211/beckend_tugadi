import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class UpdatePhone {
    @ApiProperty({
        example: '+998939290211',
        description: 'Telefon raqam',
    })
    @IsString()
    @IsPhoneNumber()
    @IsNotEmpty()
    phone: string;

    @ApiProperty({
        example: '12345',
        description: 'Tasdiqlash kodi (OTP)',
    })
    @IsString()
    @IsNotEmpty()
    otp_code: string;
}
