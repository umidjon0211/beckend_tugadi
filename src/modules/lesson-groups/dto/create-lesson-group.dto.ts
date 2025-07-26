import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLessonGroupDto {
    @ApiProperty({ example: 'Frontend Darslari', description: 'Dars guruhining nomi' })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: 'abc123-course-id', description: 'Boglangan kursning ID raqami' })
    @IsNotEmpty()
    @IsString()
    courseId: string;
}
