import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateHomeworkDto {
  @ApiProperty({ example: 'matn', description: 'tavsiv' })
  @IsString()
  @IsNotEmpty()
  task: string;

  @ApiProperty({ example: 'file.pdf', description: 'Fayl nomi', required: false, format: "binary" })
  @IsString()
  @IsOptional()
  file?: string;

  @ApiProperty({ example: 'abc123', description: 'dars id ' })
  @IsString()
  @IsNotEmpty()
  lessonId: string;
}
