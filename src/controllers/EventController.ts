/**
 * EventController
 *
 * Core controller for managing event data in the EventEase application.
 * Provides CRUD operations and participation tracking for events.
 *
 * Key Responsibilities:
 * - Create, read, update, and delete events
 * - Generate unique IDs for new events using expo-crypto
 * - Toggle participation status for events
 * - Persist all event data to AsyncStorage
 * - Manage event list state
 *
 * Methods:
 * - getAll(): Retrieve all events from storage
 * - saveAll(events): Save complete events array to storage
 * - add(event): Create new event with auto-generated ID
 * - update(event): Update existing event by ID
 * - delete(id): Remove event by ID
 * - toggleParticipation(id): Toggle participated status for event
 *
 * Storage Key: 'events'
 */

import { saveData, getData } from '../services/storage';
import { Event } from '../types/Event';
import * as Crypto from 'expo-crypto';

const EVENT_KEY = 'events';

export class EventController {
  // Get all events (for internal use)
  static async getAllEvents(): Promise<Event[]> {
    return (await getData<Event[]>(EVENT_KEY)) || [];
  }

  // Get events for a specific user
  static async getAll(userEmail: string): Promise<Event[]> {
    const allEvents = await this.getAllEvents();
    return allEvents.filter(event => event.userEmail === userEmail);
  }

  static async saveAll(events: Event[]): Promise<void> {
    await saveData(EVENT_KEY, events);
  }

  static async add(event: Omit<Event, 'id' | 'participated' | 'userEmail'>, userEmail: string): Promise<void> {
    const allEvents = await this.getAllEvents();
    const newEvent: Event = {
      id: Crypto.randomUUID(),
      participated: false,
      userEmail,
      ...event
    };
    await this.saveAll([...allEvents, newEvent]);
  }

  static async update(updated: Event): Promise<void> {
    const allEvents = await this.getAllEvents();
    const newEvents = allEvents.map(ev => (ev.id === updated.id ? updated : ev));
    await this.saveAll(newEvents);
  }

  static async delete(id: string, userEmail: string): Promise<void> {
    const allEvents = await this.getAllEvents();
    const newEvents = allEvents.filter(ev => !(ev.id === id && ev.userEmail === userEmail));
    await this.saveAll(newEvents);
  }

  static async toggleParticipation(id: string, userEmail: string): Promise<void> {
    const allEvents = await this.getAllEvents();
    const updated = allEvents.map(ev =>
      ev.id === id && ev.userEmail === userEmail ? { ...ev, participated: !ev.participated } : ev
    );
    await this.saveAll(updated);
  }
}
