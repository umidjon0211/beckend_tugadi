import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class SubmissionDto {
  @ApiProperty({
    example: "file.txt",
    description: "Uy vazifasining fayli",
    required: false,
    format: "binary"
  })
  @IsString()
  @IsOptional()
  @Type(() => String)
  file: string;

  @ApiProperty({
    example: "Bu mening uy vazifam",
    description: "Uy vazifasi matni",
    required: false
  })
  @IsString()
  @IsOptional()
  @Type(() => String)
  text: string;
}

export class CheckDto {
  @ApiProperty({
    example: true,
    description: "Uy vazifasi ma'qullandimi?"
  })
  @IsBoolean()
  @Type(() => Boolean)
  approved: boolean;

  @ApiProperty({
    example: "Matnda xatolik bor",
    description: "Uy vazifasiga bildirilgan izoh (majburiy emas)",
    required: false
  })
  @IsString()
  @IsOptional()
  @Type(() => String)
  reason: string;
}
