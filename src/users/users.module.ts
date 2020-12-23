import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './users.service';
import { User } from './user.entity';
import { UserResolver } from './users.resolver';
import { BobaModule } from '../boba/boba.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), BobaModule],
  providers: [UsersService, UserResolver],
  exports: [UsersService],
})
export class UsersModule {}
