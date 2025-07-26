import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsMobilePhone, IsString } from "class-validator";
import { EverificationTypes } from "src/core/types/verification";

export class SendOtpDto {
    @ApiProperty({
        enum: EverificationTypes,
        description: "Tasdiqlash turi (masalan, ro'yxatdan o'tish, parolni tiklash va hokazo)"
    })
    @IsEnum(EverificationTypes)
    type: EverificationTypes;

    @ApiProperty({
        example: '+998939290211',
        description: "Telefon raqami (O'zbekiston uchun)"
    })
    @IsMobilePhone('uz-UZ')
    @IsString()
    phone: string;
}

export class VerifyOtpDto extends SendOtpDto {
    @ApiProperty({
        example: '123456',
        description: "SMS orqali yuborilgan tasdiqlash kodi (OTP)"
    })
    @IsString()
    otp: string;
}
