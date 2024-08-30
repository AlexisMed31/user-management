import { Injectable } from '@nestjs/common';

//Type interface to describe a user
export interface User {
  ID?: number;
  name: string;
  username: string;
  password: string;
  role: string;
}
@Injectable()
export class UsersService {
  private readonly users = <User[]>[
    {
      ID: 1,
      name: 'john carter',
      username: 'jdawg',
      password: 'fire',
      role: 'Aspirante',
    },
    {
      ID: 2,
      name: 'sabrina rina',
      username: 'Srina',
      password: 'rinabrina',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
