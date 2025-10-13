import { saveData, getData } from '../services/storage';
import { User } from '../types/User';

const USER_KEY = 'user';

export class AuthController {
  static async loginOrRegister(email: string, password: string): Promise<User> {
    const storedUser = await getData<User>(USER_KEY);

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      return storedUser;
    }

    const newUser: User = { email, password };
    await saveData(USER_KEY, newUser);
    return newUser;
  }

  static async getCurrentUser(): Promise<User | null> {
    return await getData<User>(USER_KEY);
  }
}
