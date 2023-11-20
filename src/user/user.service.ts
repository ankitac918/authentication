import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CONSTANTS } from 'src/constants';

@Injectable()
export class UserService {
  public users: User[] = [
    {
      username: 'user1',
      password: 'admin',
      email: 'user1@gmail.com',
      age: 15,
      role: CONSTANTS.ROLES.WEB_DEVELOPER,
    },
    {
      username: 'user2',
      password: 'admin',
      email: 'user2@gmail.com',
      age: 20,
      role: CONSTANTS.ROLES.ANDROID_DEVELOPER,
    },
    {
      username: 'user3',
      password: 'admin',
      email: 'user3@gmail.com',
      age: 26,
      role: CONSTANTS.ROLES.ANDROID_DEVELOPER,
    },
  ];

  getUserByUserName(userName: string): User {
    return this.users.find((user: User) => user.username === userName);
  }
}
