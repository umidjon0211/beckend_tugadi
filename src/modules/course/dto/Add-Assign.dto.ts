import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAssignedCourseDto {
  @ApiProperty({ example: 1, description: '' })
  @IsInt()
  userId: number;

  @ApiProperty({ example: 'course-id', description: 'String' })
  @IsString()
  courseId: string;
}
