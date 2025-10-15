/**
 * CustomButton Component
 *
 * A reusable button component with custom styling for the EventEase application.
 * Provides consistent button appearance across the app.
 *
 * Features:
 * - Black background with white text
 * - Rounded corners
 * - Touchable with press feedback
 * - Customizable title
 *
 * Props:
 * - title: Button text to display
 * - onPress: Function to call when button is pressed
 * - style: Optional additional styles
 */

import React from "react";
import { TouchableOpacity, Text, ViewStyle } from "react-native";
import { styles } from "./styles/CustomButton.styles";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

export default function CustomButton({ title, onPress, style }: CustomButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
