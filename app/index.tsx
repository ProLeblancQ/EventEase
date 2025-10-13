import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../src/pages/LoginScreen';
import HomeScreen from '../src/pages/HomeScreen';
import EventFormScreen from '../src/pages/EventFormScreen';
import { AuthController } from '../src/controllers/AuthController';
import { User } from '../src/types/User';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    AuthController.getCurrentUser().then(setUser);
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      {user ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} initialParams={{ user }} />
          <Stack.Screen name="EventForm" component={EventFormScreen} />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
}
