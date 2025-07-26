import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './do/create-contact.dto';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class ContactService {
  constructor(private prismaService: PrismaService) {}

 async create(createContactDto: CreateContactDto) {
    let created  = await this.prismaService.contact.create({
      data: createContactDto
    })
    return {
     success: true,
     message:"Successfully Contacted!"
    }
  }
  

}
