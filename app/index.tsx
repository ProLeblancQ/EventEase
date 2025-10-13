import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../src/pages/LoginScreen';
import HomeScreen from '../src/pages/HomeScreen';
import EventFormScreen from '../src/pages/EventFormScreen';
import LogoutButton from '../src/components/LogoutButton';
import { AuthController } from '../src/controllers/AuthController';
import { User } from '../src/types/User';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    AuthController.getCurrentUser().then(setUser);
  }, []);

  const handleLogout = () => {
    console.log("handleLogout called in App - setting user to null");
    setUser(null);
    console.log("User state set to null");
  };

  const handleLogin = (user: User) => {
    console.log("handleLogin called in App - setting user:", user);
    setUser(user);
  };

  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      {user ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            initialParams={{ user }}
            options={({ navigation }) => ({
              headerRight: () => <LogoutButton navigation={navigation} onLogout={handleLogout} />
            })}
          />
          <Stack.Screen
            name="EventForm"
            component={EventFormScreen}
            options={({ navigation }) => ({
              headerRight: () => <LogoutButton navigation={navigation} onLogout={handleLogout} />
            })}
          />
        </>
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          initialParams={{ onLogin: handleLogin }}
        />
      )}
    </Stack.Navigator>
  );
}
