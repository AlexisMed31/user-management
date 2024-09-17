import { Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  //Get all users
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  //Get one user
  @Get(':id')
  findOne(@Param() params: any) {
    return this.userService.findOne(params.id);
  }

  @Post('create')
  createUser() {
    return 'this creates a user';
  }
}
