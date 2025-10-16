/**
 * LogoutButton Component
 *
 * A reusable logout button component for the EventEase application.
 * Handles user logout and navigation back to the login screen.
 *
 * Features:
 * - Clears user session from storage
 * - Navigates to login screen after logout
 * - Icon-based button (logout icon)
 * - Confirms logout action before proceeding
 *
 * Props:
 * - navigation: React Navigation object for screen transitions
 * - onLogout: Optional callback after logout
 */

import React from "react";
import { AuthController } from "../controllers/AuthController";
import IconButton from "./IconButton";

interface LogoutButtonProps {
  navigation: any;
  onLogout?: () => void;
}

export default function LogoutButton({ navigation, onLogout }: LogoutButtonProps) {
  const handleLogout = async () => {
    await AuthController.logout();
    if (onLogout) {
      onLogout();
    }
    navigation.replace("Login");
  };

  return <IconButton iconName="logout" onPress={handleLogout} />;
}
