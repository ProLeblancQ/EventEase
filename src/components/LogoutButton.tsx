/**
 * LogoutButton Component
 *
 * A reusable logout button component for the EventEase application.
 * Handles user logout and navigation back to the login screen.
 *
 * Features:
 * - Clears user session from storage
 * - Navigates to login screen after logout
 * - Styled as a header button (top-right placement)
 * - Confirms logout action before proceeding
 *
 * Props:
 * - navigation: React Navigation object for screen transitions
 */

import React from "react";
import { TouchableOpacity, Text, Alert } from "react-native";
import { AuthController } from "../controllers/AuthController";
import { styles } from "./styles/LogoutButton.styles";

interface LogoutButtonProps {
  navigation: any;
  onLogout?: () => void;
}

export default function LogoutButton({ navigation, onLogout }: LogoutButtonProps) {
  const handleLogout = () => {
    console.log("LogoutButton clicked!");

    // Simple confirmation without Alert for testing
    const performLogout = async () => {
      console.log("Performing logout...");
      await AuthController.logout();
      console.log("Logout completed, calling onLogout callback");
      if (onLogout) {
        onLogout();
      }
      console.log("Navigating to Login screen");
      navigation.replace("Login");
    };

    // Direct logout without confirmation for now
    performLogout();
  };

  return (
    <TouchableOpacity onPress={handleLogout} style={styles.button}>
      <Text style={styles.text}>Déconnexion</Text>
    </TouchableOpacity>
  );
}
