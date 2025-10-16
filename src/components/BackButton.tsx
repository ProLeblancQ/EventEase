/**
 * BackButton Component
 *
 * A reusable back navigation button component for the EventEase application.
 * Handles navigation back to the previous screen.
 *
 * Features:
 * - Icon-based button (arrow-back icon)
 * - Same styling as LogoutButton (circular, glassmorphism effect)
 * - Navigates to previous screen when pressed
 *
 * Props:
 * - navigation: React Navigation object for screen transitions
 */

import React from "react";
import IconButton from "./IconButton";

interface BackButtonProps {
  navigation: any;
}

export default function BackButton({ navigation }: BackButtonProps) {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return <IconButton iconName="arrow-back" onPress={handleGoBack} />;
}
