import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SeedersService implements OnModuleInit {
  private readonly logger = new Logger(SeedersService.name);

  constructor(
    private prismaService: PrismaService,
  ) { }
  async onModuleInit() {                                      
    await this.userSeeder();
  }
  async userSeeder() {
    const fullName = "Umidjon Jamolidinov"
    const password = "umidjon0211"
    const phone = "+998939290211"
    const hashedPassword = await bcrypt.hash(password, 10);
    await this.prismaService.users.create({data: {fullName: fullName, password: hashedPassword, phone: phone, role: 'ASSISTANT'}})
    this.logger.log('✅ Admin successfully created!');
  }
}
