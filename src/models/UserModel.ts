/**
 * UserModel
 *
 * Model class representing a user entity in the EventEase application.
 * Provides a structured way to instantiate and work with user objects.
 *
 * Properties:
 * - email: User's email address (used as username)
 * - password: User's password (stored in plain text - for demo purposes only)
 *
 * Note: In production, passwords should be hashed and never stored in plain text.
 */

import { User } from '../types/User';

export class UserModel {
  email: string;
  password: string;

  constructor({ email, password }: User) {
    this.email = email;
    this.password = password;
  }
}
