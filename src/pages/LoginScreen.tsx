/**
 * LoginScreen Component
 *
 * This is the authentication screen for the EventEase application.
 * It handles both user login and registration through a unified interface.
 *
 * Features:
 * - Email and password input fields
 * - Automatic login or registration based on stored credentials
 * - Navigation to Home screen upon successful authentication
 *
 * Props:
 * - navigation: React Navigation object for screen transitions
 *
 * State:
 * - email: User's email address
 * - password: User's password
 */

import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { AuthController } from "../controllers/AuthController";
import { User } from "../types/User";
import { styles } from "./styles/LoginScreen.styles";

interface Props {
  onLogin: (user: User) => void;
}

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const user = await AuthController.loginOrRegister(email, password);
    navigation.replace("Home", { user });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion / Inscription</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title="Se connecter" onPress={handleLogin} />
    </View>
  );
}
