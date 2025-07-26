import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Edu-pro platform')
    .setDescription('Edu-Pro master api')
    .setVersion('1.0')
    .addTag('Auth')
    .addTag('Verification')
    .addTag('Mentor Profiles')
    .addTag('Profiles')
    .addTag('Courses')
    .addTag('Course Categories')
    .addTag('Purchased Courses')
    .addTag('Category Ratings')
    .addTag('Lessons')
    .addTag('Lesson Groups')
    .addTag('Lesson Files')
    .addTag('Exam')
    .addTag('Homeworks')
    .addTag('Questions & Answers')
    .addTag('Users')
    .addTag('Payment')
    .addTag('Contact')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-dock', app, document);
}