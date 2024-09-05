import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

//Auth logic
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async logIn(
    username: string,
    pass: string,
    id: string,
    //TODO: Add user role
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(id);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.ID, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
