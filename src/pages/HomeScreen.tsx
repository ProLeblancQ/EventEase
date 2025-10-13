import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { EventController } from '../controllers/EventController';
import { Event } from '../types/Event';

export default function HomeScreen({ navigation, route }: any) {
  const { user } = route.params;
  const [events, setEvents] = useState<Event[]>([]);

  const loadEvents = async () => {
    const data = await EventController.getAll();
    setEvents(data);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadEvents);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Bienvenue, {user.email}</Text>
      <Button title="Ajouter un événement" onPress={() => navigation.navigate('EventForm')} />
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderWidth: 1, marginVertical: 5, borderRadius: 8 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Participé: {item.participated ? '✅' : '❌'}</Text>
            <Button title="Modifier" onPress={() => navigation.navigate('EventForm', { event: item })} />
            <Button title="Supprimer" onPress={() => EventController.delete(item.id).then(loadEvents)} />
            <Button title="Participation" onPress={() => EventController.toggleParticipation(item.id).then(loadEvents)} />
          </View>
        )}
      />
    </View>
  );
}
