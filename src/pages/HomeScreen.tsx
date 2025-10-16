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
import { View, Text, ScrollView } from "react-native";
import { EventController } from "../controllers/EventController";
import { Event } from "../types/Event";
import { styles } from "./styles/HomeScreen.styles";
import { typography } from "../styles/typography";
import BackgroundWrapper from "../components/BackgroundWrapper";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";

export default function HomeScreen({ navigation, route }: any) {
  const { user } = route.params;
  const [events, setEvents] = useState<Event[]>([]);

  const loadEvents = async () => {
    const data = await EventController.getAll(user.email);
    setEvents(data);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", loadEvents);
    return unsubscribe;
  }, [navigation]);

  return (
    <BackgroundWrapper>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Card>
          <Text style={[styles.welcomeText, typography.h2]}>Bienvenue, {user.email}</Text>
          <CustomButton
            title="Ajouter un événement"
            onPress={() => navigation.navigate("EventForm", { user })}
          />
          {events.map((item) => (
            <View key={item.id} style={styles.eventCard}>
              <Text style={[styles.eventTitle, typography.h3]}>{item.title}</Text>
              <Text style={[styles.eventDescription, typography.body]}>{item.description}</Text>
              <Text style={[styles.eventDate, typography.bodySmall]}>Date: {item.date}</Text>
              <Text style={[styles.participationStatus, typography.bodySmall]}>
                Participé: {item.participated ? "✅" : "❌"}
              </Text>
              <CustomButton
                title="Modifier"
                onPress={() => navigation.navigate("EventForm", { event: item, user })}
              />
              <CustomButton
                title="Supprimer"
                onPress={() => EventController.delete(item.id, user.email).then(loadEvents)}
              />
              <CustomButton
                title="Participation"
                onPress={() =>
                  EventController.toggleParticipation(item.id, user.email).then(loadEvents)
                }
              />
            </View>
          ))}
        </Card>
      </ScrollView>
    </BackgroundWrapper>
  );
}
