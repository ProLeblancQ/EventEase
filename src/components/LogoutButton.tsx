/**
 * LogoutButton Component
 *
 * A reusable logout button component for the EventEase application.
 * Handles user logout and automatic navigation back to the login screen.
 *
 * Features:
 * - Clears user session from storage
 * - Icon-based button (logout icon)
 * - Triggers callback to update app state
 * - Navigation handled automatically by state change
 *
 * Props:
 * - onLogout: Callback to update user state in App
 */

import React from "react";
import { AuthController } from "../controllers/AuthController";
import IconButton from "./IconButton";

interface LogoutButtonProps {
  onLogout?: () => void;
}

export default function LogoutButton({ onLogout }: LogoutButtonProps) {
  const handleLogout = async () => {
    await AuthController.logout();
    // Call the onLogout callback - this will update the user state in App
    // and trigger automatic navigation to Login screen
    if (onLogout) {
      onLogout();
    }
  };

  return <IconButton iconName="logout" onPress={handleLogout} />;
}
