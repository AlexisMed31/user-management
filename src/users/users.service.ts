import { Injectable } from '@nestjs/common';
//User logic, querys to database.

//Type interface to describe a user
export interface User {
  ID?: string;
  name?: string;
  username: string;
  password: string;
  role?: string;
}
@Injectable()
export class UsersService {
  //array of users
  private readonly users = <User[]>[
    {
      ID: '1',
      name: 'john carter',
      username: 'jdawg',
      password: 'fire',
      role: 'Aspirante',
    },
    {
      ID: '2',
      name: 'sabrina rina',
      username: 'Srina',
      password: 'rinabrina',
      role: 'Aspirante',
    },
  ];

  //Function to find a user
  async findOne(id: any): Promise<User | undefined> {
    return this.users.find((user) => user.ID === id);
  }
  async findAll(): Promise<User[] | undefined> {
    return this.users;
  }
}
