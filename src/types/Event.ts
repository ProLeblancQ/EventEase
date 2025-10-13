/**
 * Event Type Definition
 *
 * TypeScript interface defining the structure of an event object.
 * Core data model for all event-related operations in the application.
 *
 * Properties:
 * - id: Unique identifier (UUID string)
 * - title: Event name/title (string)
 * - description: Detailed event description (string)
 * - date: Event date in string format (string)
 * - participated: Participation status flag (boolean)
 *
 * Usage:
 * - CRUD operations in EventController
 * - Display and manipulation in HomeScreen
 * - Form data in EventFormScreen
 * - Data persistence in AsyncStorage
 */

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  participated: boolean;
}
