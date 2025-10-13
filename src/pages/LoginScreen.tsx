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

export default function LoginScreen({ navigation, route }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Validation des champs
    if (!email.trim()) {
      alert("Veuillez entrer votre email");
      return;
    }

    if (!password.trim()) {
      alert("Veuillez entrer votre mot de passe");
      return;
    }

    if (password.length < 4) {
      alert("Le mot de passe doit contenir au moins 4 caractères");
      return;
    }

    console.log("Login attempt with:", email);
    const user = await AuthController.loginOrRegister(email, password);
    console.log("User logged in:", user);

    // Call the onLogin callback if it exists
    if (route.params?.onLogin) {
      route.params.onLogin(user);
    }

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
