import { saveData, getData } from '../services/storage';
import { Event } from '../types/Event';
import { v4 as uuidv4 } from 'uuid';

const EVENT_KEY = 'events';

export class EventController {
  static async getAll(): Promise<Event[]> {
    return (await getData<Event[]>(EVENT_KEY)) || [];
  }

  static async saveAll(events: Event[]): Promise<void> {
    await saveData(EVENT_KEY, events);
  }

  static async add(event: Omit<Event, 'id' | 'participated'>): Promise<void> {
    const events = await this.getAll();
    const newEvent: Event = { id: uuidv4(), participated: false, ...event };
    await this.saveAll([...events, newEvent]);
  }

  static async update(updated: Event): Promise<void> {
    const events = await this.getAll();
    const newEvents = events.map(ev => (ev.id === updated.id ? updated : ev));
    await this.saveAll(newEvents);
  }

  static async delete(id: string): Promise<void> {
    const events = await this.getAll();
    const newEvents = events.filter(ev => ev.id !== id);
    await this.saveAll(newEvents);
  }

  static async toggleParticipation(id: string): Promise<void> {
    const events = await this.getAll();
    const updated = events.map(ev =>
      ev.id === id ? { ...ev, participated: !ev.participated } : ev
    );
    await this.saveAll(updated);
  }
}
