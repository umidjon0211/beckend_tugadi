import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateLessonDto {
  @ApiProperty({ example: "Dars1", description: "Dars nomi" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: "Juda yaxshi", description: "Dars haqida ma'lumot" })
  @IsString()
  @IsNotEmpty()
  about: string;

  @ApiProperty({ example: "video.mp4", description: "Dars videosi", format: "binary" })
  video: string;

  @ApiProperty({ example: 1, description: "Guruhning ID raqami" })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  groupId: number;
}
