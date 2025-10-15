/**
 * EventFormScreen Component
 *
 * Form screen for creating new events or editing existing ones.
 * Handles both creation and update operations based on route parameters.
 *
 * Features:
 * - Create new events with title, description, and date
 * - Edit existing events by pre-filling form fields
 * - Form validation and data persistence
 * - Navigate back to HomeScreen after save
 *
 * Props:
 * - navigation: React Navigation object for screen transitions
 * - route: Contains optional event object for editing mode
 *
 * State:
 * - title: Event title
 * - description: Event description
 * - date: Event date (string format)
 */

import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { EventController } from "../controllers/EventController";
import { Event } from "../types/Event";
import { styles } from "./styles/EventFormScreen.styles";
import BackgroundWrapper from "../components/BackgroundWrapper";
import Card from "../components/Card";

export default function EventFormScreen({ route, navigation }: any) {
  const event: Event | undefined = route.params?.event;
  const user = route.params?.user;
  const [title, setTitle] = useState(event?.title || "");
  const [description, setDescription] = useState(event?.description || "");
  const [date, setDate] = useState(event?.date || "");

  const handleSave = async () => {
    // Validation
    if (!title.trim()) {
      alert("Veuillez entrer un titre");
      return;
    }

    if (!description.trim()) {
      alert("Veuillez entrer une description");
      return;
    }

    if (!date.trim()) {
      alert("Veuillez entrer une date");
      return;
    }

    if (event) {
      await EventController.update({ ...event, title, description, date });
    } else {
      await EventController.add({ title, description, date }, user.email);
    }
    navigation.goBack();
  };

  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <Card>
          <TextInput
            placeholder="Titre"
            value={title}
            onChangeText={setTitle}
            style={styles.input}
          />
          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
            style={styles.input}
          />
          <TextInput
            placeholder="Date"
            value={date}
            onChangeText={setDate}
            style={styles.input}
          />
          <Button title="Enregistrer" onPress={handleSave} />
        </Card>
      </View>
    </BackgroundWrapper>
  );
}
