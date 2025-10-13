import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { AuthController } from '../controllers/AuthController';
import { User } from '../types/User';

interface Props {
  onLogin: (user: User) => void;
}

export default function LoginScreen({ onLogin }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const user = await AuthController.loginOrRegister(email, password);
    onLogin(user);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion / Inscription</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Mot de passe" value={password} secureTextEntry onChangeText={setPassword} style={styles.input} />
      <Button title="Se connecter" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, marginVertical: 8, padding: 10, borderRadius: 8 },
  title: { fontSize: 20, textAlign: 'center', marginBottom: 20 },
});
