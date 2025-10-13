/**
 * AuthController
 *
 * Manages user authentication and registration for the EventEase application.
 * Handles user login, registration, and session persistence using AsyncStorage.
 *
 * Key Responsibilities:
 * - Authenticate existing users by comparing credentials
 * - Register new users if credentials don't match stored data
 * - Retrieve current logged-in user from storage
 * - Persist user data between app sessions
 *
 * Methods:
 * - loginOrRegister(email, password): Authenticate or create new user account
 * - getCurrentUser(): Retrieve currently logged-in user from storage
 *
 * Storage Key: 'user'
 */

import { saveData, getData, removeData } from '../services/storage';
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

  static async logout(): Promise<void> {
    console.log("AuthController.logout called - removing user data");
    await removeData(USER_KEY);
    console.log("User data removed from storage");
  }
}
