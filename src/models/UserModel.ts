import { User } from '../types/User';

export class UserModel {
  email: string;
  password: string;

  constructor({ email, password }: User) {
    this.email = email;
    this.password = password;
  }
}
