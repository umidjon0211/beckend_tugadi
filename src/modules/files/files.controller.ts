import { Controller, Get, Post, Body, Patch, Param, Delete, StreamableFile, Res } from '@nestjs/common';
import { FilesService } from './files.service';
import { join } from 'path';
import { createReadStream } from 'fs';
import { Response } from 'express';
import { Auth } from 'src/core/decorators/decorators.service';
import { UserRole } from '@prisma/client';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) { }

  getPublicFile(@Param('name') name: string, @Res() res: Response) {
    const filePath = join(process.cwd(), 'uploads', 'public', name);
    return res.sendFile(filePath);
  }

  @Get('private/lesson-file/:lessonId/:name')
  @Auth(UserRole.STUDENT)
  @ApiBearerAuth()
  @ApiOperation({summary: "STUDENT"})
  getLessonFile(@Param('lessonId') lessonId: string, @Param('name') name: string,) {
    const filePath = join(process.cwd(), 'uploads', 'private', 'lesson-files', lessonId, name);
    const fileStream = createReadStream(filePath);
    return new StreamableFile(fileStream);


  }
  @Get('private/video/:lessonId/:hlsf')
  @Auth(UserRole.STUDENT)
  @ApiBearerAuth()
  @ApiOperation({summary: "STUDENT"})
   getVideo(@Param('lessonId') lessonId: string, @Param('filename') filename: string) {
    const videoPath = join(process.cwd(), 'uploads', 'private', 'videos', lessonId, filename);
    const fileStream = createReadStream(videoPath); return new StreamableFile(fileStream);
  }


}
