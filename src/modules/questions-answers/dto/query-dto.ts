import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsNumberString, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class GetQuestionsAnswerQueryDto {
    @ApiPropertyOptional({ example: 10, description: 'Natijalar soni (limit)' })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    limit?: number;

    @ApiPropertyOptional({ example: '1', description: 'Sahifa raqami' })
    @IsOptional()
    @IsNumberString()
    page?: string;

    @ApiPropertyOptional({ example: 0, description: 'O‘tkazib yuboriladigan natijalar soni (offset)' })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    offset?: number;

    @ApiPropertyOptional({ example: true, description: 'O‘qilganligi bo‘yicha filtr (true = o‘qilgan, false = o‘qilmagan)' })
    @IsOptional()
    @Type(() => Boolean)
    @IsBoolean()
    read?: boolean;

    @ApiPropertyOptional({ example: 'clz3q52d60001sf7s9tx8lq6b', description: 'Kurs ID bo‘yicha filtr' })
    @IsOptional()
    @IsString()
    courseId?: string;
}
