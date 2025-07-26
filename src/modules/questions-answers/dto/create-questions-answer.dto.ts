import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateQuestionsDto {
    @ApiProperty({ example: 'Yangi savol', description: 'Savol matni' })
    @IsString()
    @IsNotEmpty()
    text: string;

    @ApiProperty({ example: 'file.pdf', description: 'Fayl nomi (agar mavjud bo‘lsa)', required: false, format: "binary" })
    @IsString()
    @IsOptional()
    file?: string;
}

export class CreateQuestionAnswerDto {
    @ApiProperty({ example: 'Yangi javob', description: 'Javob matni' })
    @IsString()
    @IsNotEmpty()
    text: string;

    @ApiProperty({ example: 'file.pdf', description: 'Fayl nomi (agar mavjud bo‘lsa)', required: false, format: "binary" })
    @IsString()
    @IsOptional()
    file?: string;
}
