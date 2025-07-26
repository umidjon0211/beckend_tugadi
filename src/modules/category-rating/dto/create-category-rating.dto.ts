import { ApiProperty } from '@nestjs/swagger';

export class CreateRatingDto {
  @ApiProperty({ example: 5, description: 'Baxo ber 1 dan 10' })
  rate: number;

  @ApiProperty({ example: 'Zor', description: 'fikr' })
  comment: string;

  @ApiProperty({ example: 'abc123', description: 'Kurs ID' })
  courseId: string;

}
