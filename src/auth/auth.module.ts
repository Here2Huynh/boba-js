import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { BobaModule } from '../boba/boba.module';
import { JwtStrategy } from './jwt.strategy';

// const jwtConfig = config.get('jwt');

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    // JwtModule.registerAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => {
    //     return {
    //       secret: configService.get<string>('JWT_SECRET'),
    //       signOptions: {
    //         expiresIn: 3600,
    //       },
    //     };
    //   },
    //   inject: [ConfigService],
    // }),
    TypeOrmModule.forFeature([User]),
    ConfigModule,
    BobaModule,
  ],
  providers: [AuthService, AuthResolver, BobaModule, JwtStrategy],
  exports: [PassportModule, AuthService, JwtStrategy],
})
export class AuthModule {}

// try adding JWT strat and module in here ?
