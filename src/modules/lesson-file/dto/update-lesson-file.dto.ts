import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateLessonFileDto {
    @ApiProperty({ example: "Yana bir izoh", description: "Izohni yangilash uchun" })
    @IsString()
    @IsNotEmpty()
    note: string;
}
