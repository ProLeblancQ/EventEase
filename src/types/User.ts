/**
 * User Type Definition
 *
 * TypeScript interface defining the structure of a user object.
 * Used throughout the application for type safety and consistency.
 *
 * Properties:
 * - email: User's email address (string)
 * - password: User's password (string)
 *
 * Usage:
 * - Authentication and user session management
 * - Type checking in controllers and components
 * - Data persistence in AsyncStorage
 */

export interface User {
  email: string;
  password: string;
}
