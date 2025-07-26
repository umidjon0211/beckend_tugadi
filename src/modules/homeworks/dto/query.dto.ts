import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumberString, IsNumber } from 'class-validator';

export class GetHomeworksQueryDto {
  @ApiPropertyOptional({ example: 'clxvfa1e90001tx18d3r4ab5x', description: 'Kurs ID raqami' })
  @IsOptional()
  @IsString()
  courseId?: string;

  @ApiPropertyOptional({ example: '1', description: 'Sahifa raqami' })
  @IsOptional()
  @IsNumberString()
  page?: string;

  @ApiPropertyOptional({ example: '10', description: 'Har bir sahifadagi elementlar soni' })
  @IsOptional()
  @IsNumberString()
  limit?: string;
}

export class GetSubmitsQueryDto {
  @ApiPropertyOptional({ example: 'clxvfa1e90001tx18d3r4ab5x', description: 'Dars ID raqami' })
  @IsOptional()
  @IsString()
  lessonId?: string;

  @ApiPropertyOptional({ example: '1', description: 'Sahifa raqami' })
  @IsOptional()
  @IsNumberString()
  page?: string;

  @ApiPropertyOptional({ example: '10', description: 'Har bir sahifadagi elementlar soni' })
  @IsOptional()
  @IsNumberString()
  limit?: string;
}
export class GetSubmitQueryDto {
  @ApiPropertyOptional({ example: '1', description: 'Sahifa raqami' })
  @IsOptional()
  @IsNumberString()
  page?: string;

  @ApiPropertyOptional({ example: '10', description: 'Har bir sahifadagi elementlar soni' })
  @IsOptional()
  @IsNumberString()
  limit?: string;

  @ApiPropertyOptional({ example: 'clxvfa1e90001tx18d3r4ab5x', description: 'Kurs ID raqami' })
  @IsOptional()
  @IsString()
  courseId?: string;

  @ApiPropertyOptional({ example: 1, description: 'Uy vazifasi ID raqami' })
  @IsOptional()
  @IsNumber()
  homeworkId?: number;

  @ApiPropertyOptional({ example: 1, description: 'Foydalanuvchi ID raqami' })
  @IsOptional()
  @IsNumber()
  userId?: number;
}
