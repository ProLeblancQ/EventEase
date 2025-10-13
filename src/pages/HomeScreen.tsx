/**
 * HomeScreen Component
 *
 * Main dashboard of the EventEase application displaying all events.
 * Users can view, manage, and interact with their events from this screen.
 *
 * Features:
 * - Display welcome message with user email
 * - List all events in a scrollable FlatList
 * - Add new events via navigation button
 * - Edit existing events
 * - Delete events with confirmation
 * - Toggle participation status for each event
 * - Auto-refresh events when screen gains focus
 *
 * Props:
 * - navigation: React Navigation object for screen transitions
 * - route: Contains user object passed from LoginScreen
 *
 * State:
 * - events: Array of Event objects loaded from storage
 */

import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { EventController } from "../controllers/EventController";
import { Event } from "../types/Event";
import { styles } from "./styles/HomeScreen.styles";

export default function HomeScreen({ navigation, route }: any) {
  const { user } = route.params;
  const [events, setEvents] = useState<Event[]>([]);

  const loadEvents = async () => {
    const data = await EventController.getAll();
    setEvents(data);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", loadEvents);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenue, {user.email}</Text>
      <Button
        title="Ajouter un événement"
        onPress={() => navigation.navigate("EventForm")}
      />
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventCard}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDescription}>{item.description}</Text>
            <Text style={styles.eventDate}>Date: {item.date}</Text>
            <Text style={styles.participationStatus}>
              Participé: {item.participated ? "✅" : "❌"}
            </Text>
            <Button
              title="Modifier"
              onPress={() => navigation.navigate("EventForm", { event: item })}
            />
            <Button
              title="Supprimer"
              onPress={() => EventController.delete(item.id).then(loadEvents)}
            />
            <Button
              title="Participation"
              onPress={() =>
                EventController.toggleParticipation(item.id).then(loadEvents)
              }
            />
          </View>
        )}
      />
    </View>
  );
}
