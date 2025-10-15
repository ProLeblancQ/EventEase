import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../src/pages/LoginScreen';
import HomeScreen from '../src/pages/HomeScreen';
import EventFormScreen from '../src/pages/EventFormScreen';
import LogoutButton from '../src/components/LogoutButton';
import { AuthController } from '../src/controllers/AuthController';
import { User } from '../src/types/User';
import { useFonts } from '../src/hooks/useFonts';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const fontsLoaded = useFonts();

  useEffect(() => {
    AuthController.getCurrentUser().then(setUser);
  }, []);

  // Show loading screen while fonts are loading
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

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
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTransparent: true,
        headerStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      {user ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            initialParams={{ user }}
            options={({ navigation }) => ({
              title: '',
              headerRight: () => <LogoutButton navigation={navigation} onLogout={handleLogout} />
            })}
          />
          <Stack.Screen
            name="EventForm"
            component={EventFormScreen}
            options={({ navigation }) => ({
              title: '',
              headerRight: () => <LogoutButton navigation={navigation} onLogout={handleLogout} />
            })}
          />
        </>
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          initialParams={{ onLogin: handleLogin }}
          options={{
            title: '',
          }}
        />
      )}
    </Stack.Navigator>
  );
}
