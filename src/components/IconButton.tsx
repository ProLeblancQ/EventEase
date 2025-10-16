/**
 * IconButton Component
 *
 * A reusable icon button component with circular styling.
 * Designed for header actions like logout.
 *
 * Features:
 * - Circular white button with black border
 * - Material icon support
 * - Touchable with press feedback
 * - Customizable icon and action
 *
 * Props:
 * - iconName: Name of the Material icon
 * - onPress: Function to call when button is pressed
 * - size: Optional icon size (default: 24)
 */

import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles/IconButton.styles";

interface IconButtonProps {
  iconName: keyof typeof MaterialIcons.glyphMap;
  onPress: () => void;
  size?: number;
}

export default function IconButton({ iconName, onPress, size = 24 }: IconButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <MaterialIcons name={iconName} size={size} color="#000" />
    </TouchableOpacity>
  );
}
