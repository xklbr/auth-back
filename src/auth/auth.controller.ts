import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto';
import { LoginAuthDto } from './dto';
import { Auth, GetUser } from './decorators';
import { User } from 'src/user/entities/user.entity';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createAuth(@Body() createUserDto: CreateUserDto) {
    return this.authService.createAuth(createUserDto);
  }

  @Post('login')
  loginAuth(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.loginAuth(loginAuthDto);
  }

  @Get('check-status')
  @Auth()
  checkAuthStatus(@GetUser() user: User) {
    return this.authService.checkAuthStatus(user);
  }
}
