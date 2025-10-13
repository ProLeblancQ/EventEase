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
