import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { EventController } from '../controllers/EventController';
import { Event } from '../types/Event';

export default function EventFormScreen({ route, navigation }: any) {
  const event: Event | undefined = route.params?.event;
  const [title, setTitle] = useState(event?.title || '');
  const [description, setDescription] = useState(event?.description || '');
  const [date, setDate] = useState(event?.date || '');

  const handleSave = async () => {
    if (event) {
      await EventController.update({ ...event, title, description, date });
    } else {
      await EventController.add({ title, description, date });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Titre" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} />
      <TextInput placeholder="Date" value={date} onChangeText={setDate} style={styles.input} />
      <Button title="Enregistrer" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, marginVertical: 8, padding: 10, borderRadius: 8 },
});
