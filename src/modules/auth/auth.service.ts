import { BadRequestException, ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RedisService } from 'src/common/redis/redis.service';
import { JwtAccessToken, JWtRefreshToken } from 'src/utils/jwt-utils';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from "bcrypt"
import { LoginDto } from './dto/loginDto';
import { VerificationService } from '../verification/verification.service';
import { ResetPasswordDto } from './dto/resetPassword.dto';
import { RefreshTokenDto } from './dto/refresh-token';
import { EverificationTypes } from 'src/core/types/verification';

interface JwtPayload {
    id: number,
    role: string
}

@Injectable()
export class AuthService {

    constructor(private prismaService: PrismaService, private redisService: RedisService, private jwtService: JwtService, private verifiacationService: VerificationService) { }


    private async generateToken(payload: JwtPayload, accessTokenOnly = false) {
        const accessToken = await this.jwtService.signAsync(payload, JwtAccessToken);
        if (accessTokenOnly) {
            return { accessToken };
        }

        const refreshToken = await this.jwtService.signAsync(
            { id: payload.id },
            JWtRefreshToken
        );

        return { accessToken, refreshToken };
    }

    async register(payload: Required<RegisterDto>) {
        await this.verifiacationService.CheckConfirmOtp({
            type: EverificationTypes.REGISTER,
            phone: payload.phone,
            otp: payload.otp
        });

        const fullname = await this.prismaService.users.findFirst({ where: { fullName: payload.fullName } });
        if (fullname) throw new ConflictException(`${payload.fullName} is already registered!`);

        const phone = await this.prismaService.users.findFirst({ where: { phone: payload.phone } });
        if (phone) throw new ConflictException(`${payload.phone} is already exists!`);

        const stored = await this.redisService.get(
            this.verifiacationService.getKey(EverificationTypes.REGISTER, payload.phone, true)
        );

        console.log(stored)
        if (!stored) throw new BadRequestException("Otp expire or not Found");

        const UserData = JSON.parse(stored);
        if (UserData !== payload.otp) {
            throw new BadRequestException("Otp invalide");
        }

        await this.redisService.del(
            this.verifiacationService.getKey(EverificationTypes.REGISTER, payload.phone, true)
        );

        const hash = await bcrypt.hash(payload.password, 10);
        const created = await this.prismaService.users.create({ data: { ...payload, password: hash } });

        return {
            success: true,
            message: 'Successfully Registered, Next Step Login!',
            data: created
        };
    }



    async login(payload: Required<LoginDto>) {
        let exists = await this.prismaService.users.findFirst({
            where: {
                phone: payload.phone
            }
        })
        if (!exists) throw new NotFoundException(`this ${payload.phone} is not found`)
        let compare = await bcrypt.compare(payload.password, exists.password)
        if (!compare) throw new NotFoundException(`this ${payload.password} is not match`)

        if (exists.role === 'MENTOR') {
            const mentorProfile = await this.prismaService.mentorProfile.findUnique({
                where: { user_id: exists.id }
            });

            if (!mentorProfile) {
                await this.prismaService.mentorProfile.create({
                    data: {
                        user_id: exists.id
                    }
                });
            }
        }

        let token = await this.generateToken({ id: exists.id, role: exists.role })
        return {
            success: true,
            data: exists,
            token: token
        }
    }

    async reset_password(payload: Required<ResetPasswordDto>) {

        await this.verifiacationService.CheckConfirmOtp({
            type: EverificationTypes.RESET_PASSWORD,
            phone: payload.phone,
            otp: payload.otp_code.toString()
        })

        let stored = await this.redisService.get(`pass:${payload.phone}`)
        if (!stored) throw new BadRequestException("Otp expire or not found")

        let userData = JSON.parse(stored)

        if (userData.otp_code != payload.otp_code) throw new BadRequestException("Otp invalid")

        await this.redisService.del(`pass:${payload.phone}`)

        let hash = await bcrypt.hash(payload.password, 10)

        await this.prismaService.users.update({
            where: { phone: payload.phone },
            data: { password: hash },
        });

        return {
            message: "Password Updated SuccessFully"
        }
    }

    async refresh_token({ token }: RefreshTokenDto) {
        try {
            const payload = await this.jwtService.verifyAsync(token);
            return {
                message: "Token muddati hali tugamagan",
                payload,
            };
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                const payload = this.jwtService.decode(token) as { id: number; role: string };
                if (!payload || !payload.id || !payload.role) {
                    throw new UnauthorizedException('Yaroqsiz refresh token');
                }
                const tokens = await this.generateToken({ id: payload.id, role: payload.role }, true);
                return {
                    message: "Yangi token berildi (oldingi muddati tugagan edi)",
                    tokens,
                };
            }
            throw new UnauthorizedException('Noto‘g‘ri refresh token');
        }
    }

}
