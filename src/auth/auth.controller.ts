import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LogInDto } from './DTO/logIn.dto';
import { AuthGuard } from './auth.guard';

//Auth route. That is used on the login screen to create a JWT.
// Route / Endpoint
@Controller('auth')
export class AuthController {
  //constructor creates an instance
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  logIn(@Body() logInDto: LogInDto) {
    return this.authService.logIn(logInDto.username, logInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
