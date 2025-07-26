import { ApiPropertyOptional } from '@nestjs/swagger';
import { CourseLevel } from '@prisma/client';
import { IsOptional, IsString, IsNumber, IsEnum } from 'class-validator';

export class GetPurchasedQueryDto {
    @ApiPropertyOptional({ example: 0, description: 'Sakrab o‘tiladigan yozuvlar soni (offset)' })
    @IsOptional()
    @IsNumber()
    offset?: number;

    @ApiPropertyOptional({ example: 10, description: 'Natijalar soni (limit)' })
    @IsOptional()
    @IsNumber()
    limit?: number;

    @ApiPropertyOptional({ example: 'nodejs', description: 'Qidirilayotgan so‘z yoki matn' })
    @IsOptional()
    @IsString()
    search?: string;

    @ApiPropertyOptional({ example: 3, description: 'Kategoriya ID raqami' })
    @IsOptional()
    @IsNumber()
    categoryId?: number;

    @ApiPropertyOptional({ example: CourseLevel.BEGINNER, description: 'Kurs darajasi', enum: CourseLevel })
    @IsOptional()
    @IsEnum(CourseLevel)
    level?: CourseLevel;
}

export class GetCourseAndStudentQueryDto {
    @ApiPropertyOptional({ example: 'asfeo2o3n', description: 'Kurs ID raqami' })
    @IsOptional()
    @IsString()
    id?: string;

    @ApiPropertyOptional({ example: 0, description: 'Sakrab o‘tiladigan yozuvlar soni (offset)' })
    @IsOptional()
    @IsNumber()
    offset?: number;

    @ApiPropertyOptional({ example: 10, description: 'Natijalar soni (limit)' })
    @IsOptional()
    @IsNumber()
    limit?: number;

    @ApiPropertyOptional({ example: 'nodejs', description: 'Qidirilayotgan so‘z yoki matn' })
    @IsOptional()
    @IsString()
    search?: string;
}
