/**
 * Storage Service
 *
 * Utility service providing abstraction layer for AsyncStorage operations.
 * Handles data persistence with JSON serialization/deserialization.
 *
 * Functions:
 * - saveData(key, value): Save any data type to AsyncStorage as JSON string
 * - getData<T>(key): Retrieve and parse data from AsyncStorage with type safety
 *
 * Features:
 * - Generic type support for type-safe data retrieval
 * - Automatic JSON serialization/deserialization
 * - Returns null if key doesn't exist
 * - Promise-based async operations
 *
 * Usage:
 * - User authentication data persistence
 * - Event list storage and retrieval
 * - Any app data that needs to persist between sessions
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key: string, value: any): Promise<void> => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const getData = async <T>(key: string): Promise<T | null> => {
  const jsonValue = await AsyncStorage.getItem(key);
  return jsonValue ? JSON.parse(jsonValue) : null;
};
