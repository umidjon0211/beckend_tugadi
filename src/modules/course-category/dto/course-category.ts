import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";



export class CourseCategoryDto {
    @ApiProperty({ format: "binary", description: "course categor name" })
    @IsString()
    @IsNotEmpty()
    name: string
}
export class UpdatedCourseCategoryDto extends CourseCategoryDto {
    
}