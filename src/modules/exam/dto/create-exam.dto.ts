import { ApiProperty } from '@nestjs/swagger';
import { ExamAnswer } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsInt, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

export class CreateExamDto {
    @ApiProperty({ example: 'nechi 4 * 4 ?' })
    @IsString()
    @IsNotEmpty()
    question: string;

    @ApiProperty({ example: '10', description: 'Variant A' })
    @IsString()
    @IsNotEmpty()
    variantA: string;

    @ApiProperty({ example: '15', description: 'Variant B' })
    @IsString()
    @IsNotEmpty()
    variantB: string;

    @ApiProperty({ example: '16', description: 'Variant C' })
    @IsString()
    @IsNotEmpty()
    variantC: string;

    @ApiProperty({ example: '25', description: 'Variant D' })
    @IsString()
    @IsNotEmpty()
    variantD: string;

    @ApiProperty({ enum: ExamAnswer, example: ExamAnswer.variantB, description: 'Correct answer (A/B/C/D)' })
    @IsEnum(ExamAnswer)
    answer: ExamAnswer;

    @ApiProperty({ example: 1, description: 'ID of the related lesson group' })
    @IsInt()
    lessonGroupId: number;
}

export class CreateExamManyDto {
    @ApiProperty({ example: 'What is 2 + 2?', description: 'The question text' })
    @IsString()
    @IsNotEmpty()
    question: string;

    @ApiProperty({ example: '3', description: 'Variant A' })
    @IsString()
    @IsNotEmpty()
    variantA: string;

    @ApiProperty({ example: '4', description: 'Variant B' })
    @IsString()
    @IsNotEmpty()
    variantB: string;

    @ApiProperty({ example: '5', description: 'Variant C' })
    @IsString()
    @IsNotEmpty()
    variantC: string;

    @ApiProperty({ example: '6', description: 'Variant D' })
    @IsString()
    @IsNotEmpty()
    variantD: string;

    @ApiProperty({ enum: ExamAnswer, example: ExamAnswer.variantB, description: 'Correct answer (A/B/C/D)' })
    @IsEnum(ExamAnswer)
    answer: ExamAnswer;
}
export class CreateManyExamsDto {
    @ApiProperty({ example: 1, description: 'ID' })
    @IsInt()
    @Type(() => Number)
    lessonGroupId: number

    @ApiProperty(
        {
            type: [CreateExamDto],
            description: 'Test',
            example: [
                {
                    question: 'JavaScriptda DOM nimani anglatadi?',
                    variantA: 'Togridan-togri obyekt moduli',
                    variantB: 'Hujjat obyekt modeli',
                    variantC: 'Hujjat obyekt modeli',
                    variantD: 'Hujjat obyekt moduli',
                    answer: 'variantC',
                },
            ]
        })
    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateExamManyDto)
    exams: CreateExamManyDto[]
}

