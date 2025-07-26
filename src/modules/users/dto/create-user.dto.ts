import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        example: '+998939290211',
        description: 'Telefon raqami',
    })
    @IsString()
    @IsPhoneNumber()
    @IsNotEmpty()
    phone: string;

    @ApiProperty({
        example: 'umidjon',
        description: 'To‘liq ism',
    })
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @ApiProperty({
        example: '12345678',
        description: 'Parol',
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}

export class CreateMentor {
    @ApiProperty({ example: '+998945686677', description: 'Telefon raqami' })
    @IsPhoneNumber()
    @IsNotEmpty()
    phone: string;

    @ApiProperty({ example: 'Jamolidinov Umidjon', description: 'To‘liq ism' })
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @ApiProperty({ example: 'cRcD+2WQNGu(_RS', description: 'Parol' })
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({ example: "Software engineer with 5+ years of experience", description: "Qisqacha bio yoki haqidagi bo‘lim" })
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    about?: string;

    @ApiProperty({ example: "Software Engineer", description: "Mentorning lavozimi" })
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    job: string;

    @ApiProperty({ example: 5, description: "Tajriba yillari" })
    @IsNumber()
    @IsOptional()
    @IsNotEmpty()
    experience: number;

    @ApiProperty({ example: "@mentor_handle", description: "Telegram foydalanuvchi nomi yoki havola" })
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    telegram: string;

    @ApiProperty({ example: "https://instagram.com/mentor", description: "Instagram profili URL" })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    instagram: string;

    @ApiProperty({ example: "https://linkedin.com/in/mentor", description: "LinkedIn profili URL" })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    linkedin: string;

    @ApiProperty({ example: "https://facebook.com/mentor", description: "Facebook profili URL" })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    facebook: string;

    @ApiProperty({ example: "https://github.com/mentor", description: "GitHub havolasi" })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    github: string;

    @ApiProperty({ example: "https://portfolio/mentor", description: "Foydalanuvchi veb-sayti, masalan portfolioga havola" })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    website: string;
}

export class CreateAsisstandDto {
    @ApiProperty({ example: '+998939290211', description: 'Telefon raqami' })
    @IsPhoneNumber()
    @IsNotEmpty()
    phone: string;

    @ApiProperty({ example: 'Jamolidinov Umidjon', description: 'To‘liq ism' })
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @ApiProperty({ example: 'umidjon0211', description: 'Parol' })
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({ example: 'iefwbiew', description: 'Kurs IDsi' })
    @IsString()
    @IsNotEmpty()
    courseId: string;
}
