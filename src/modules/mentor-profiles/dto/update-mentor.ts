import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class Update_Mentor_ProfileDto {
    @ApiProperty({ example: "5+ yillik tajribaga ega dasturiy injener", description: "Qisqacha bio yoki haqida bo‘limi" })
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    about?: string;

    @ApiProperty({ example: "Dasturiy injener", description: "Mentorning kasbiy lavozimi" })
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    job: string;

    @ApiProperty({ example: 5, description: "Tajriba yillari" })
    @IsNumber()
    @IsOptional()
    @IsNotEmpty()
    experience: number;

    @ApiProperty({ example: "@mentor_handle", description: "Telegram foydalanuvchi nomi yoki havolasi" })
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    telegram: string;

    @ApiProperty({ example: "https://instagram.com/mentor", description: "Instagram profilining URL manzili" })
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    instagram: string;

    @ApiProperty({ example: "https://linkedin.com/in/mentor", description: "LinkedIn profilining URL manzili" })
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    linkedin: string;

    @ApiProperty({ example: "https://facebook.com/mentor", description: "Facebook profilining URL manzili" })
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    facebook: string;

    @ApiProperty({ example: "https://github.com/mentor", description: "GitHub havolasi" })
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    github: string;

    @ApiProperty({ example: "https://portfolio/mentor", description: "Foydalanuvchining har qanday vebsayti, masalan portfolio havolasi" })
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    website: string;
}
