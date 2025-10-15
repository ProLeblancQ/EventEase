/**
 * Card Component
 *
 * A reusable card component with glassmorphism effect.
 * Provides a semi-transparent container with blur and shadow effects.
 *
 * Features:
 * - Glassmorphism design with transparency
 * - Rounded corners
 * - Shadow effect
 * - Border with opacity
 *
 * Props:
 * - children: React nodes to be rendered inside the card
 * - style: Optional additional styles
 */

import React from "react";
import { View, ViewStyle } from "react-native";
import { styles } from "./styles/Card.styles";

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export default function Card({ children, style }: CardProps) {
  return <View style={[styles.card, style]}>{children}</View>;
}
