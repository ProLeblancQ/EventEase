/**
 * EventModel
 *
 * Model class representing an event entity in the EventEase application.
 * Implements the Event interface and provides structured event data handling.
 *
 * Properties:
 * - id: Unique identifier for the event (UUID format)
 * - title: Event title/name
 * - description: Detailed description of the event
 * - date: Date of the event (string format)
 * - participated: Boolean flag indicating if user participated in the event
 *
 * This model ensures type safety and consistent data structure across the application.
 */

import { Event } from '../types/Event';

export class EventModel implements Event {
  id: string;
  title: string;
  description: string;
  date: string;
  participated: boolean;

  constructor({ id, title, description, date, participated }: Event) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.participated = participated;
  }
}
