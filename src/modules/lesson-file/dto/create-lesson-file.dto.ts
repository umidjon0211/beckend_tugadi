import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
export class CreateLessonFileDto {
    @ApiProperty({ 
        example: "birnima.jpg", 
        description: "Dars fayli", 
        format: "binary" 
    })
    file: string;

    @ApiProperty({ 
        example: "birnasadadas", 
        description: "Dars identifikatori (ID)" 
    })
    @IsString()
    @IsNotEmpty()
    lessonId: string;

    @ApiProperty({
        example: "Izoh",
        description: "Dars fayliga izoh (majburiy emas)",
        required: false
    })
    @IsString()
    @IsOptional()
    note: string;
}

