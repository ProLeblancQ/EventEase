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
import { View, TextInput, Text } from "react-native";
import { AuthController } from "../controllers/AuthController";
import { User } from "../types/User";
import { styles } from "./styles/LoginScreen.styles";
import { typography } from "../styles/typography";
import BackgroundWrapper from "../components/BackgroundWrapper";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";

interface Props {
  onLogin: (user: User) => void;
}

export default function LoginScreen({ navigation, route }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Validation des champs
    if (!email.trim()) {
      return;
    }

    if (!password.trim()) {
      return;
    }

    if (password.length < 4) {
      return;
    }

    console.log("Login attempt with:", email);
    const user = await AuthController.loginOrRegister(email, password);
    console.log("User logged in:", user);

    // Call the onLogin callback - this will update the user state in App
    // and trigger automatic navigation to Home screen
    if (route.params?.onLogin) {
      route.params.onLogin(user);
    }
  };

  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <Card>
          <Text style={[styles.title, typography.h1]}>Connexion / Inscription</Text>
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
          <CustomButton title="Se connecter" onPress={handleLogin} />
        </Card>
      </View>
    </BackgroundWrapper>
  );
}
