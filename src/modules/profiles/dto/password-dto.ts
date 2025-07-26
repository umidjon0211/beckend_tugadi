import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class Updated_Password {
    @ApiProperty({
        example: '12345678',
        description: 'Foydalanuvchining mavjud paroli',
    })
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({
        example: '87654321',
        description: 'Foydalanuvchining yangi paroli',
    })
    @IsString()
    @IsNotEmpty()
    newPassword: string;
}
