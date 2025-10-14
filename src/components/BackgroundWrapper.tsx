/**
 * BackgroundWrapper Component
 *
 * A reusable wrapper component that applies a background image to any screen.
 * Provides consistent background styling across the application.
 *
 * Features:
 * - Full-screen background image
 * - Optional overlay for better text readability
 * - Responsive and scrollable content
 *
 * Props:
 * - children: React nodes to be rendered on top of the background
 * - overlay: Optional boolean to add a semi-transparent overlay (default: false)
 * - overlayOpacity: Opacity of the overlay (default: 0.5)
 */

import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

interface BackgroundWrapperProps {
  children: React.ReactNode;
  overlay?: boolean;
  overlayOpacity?: number;
}

export default function BackgroundWrapper({
  children,
  overlay = false,
  overlayOpacity = 0.5,
}: BackgroundWrapperProps) {
  return (
    <ImageBackground
      source={require("../../assets/images/background.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      {overlay && (
        <View
          style={[
            styles.overlay,
            { backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` },
          ]}
        />
      )}
      <View style={styles.content}>{children}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
  },
});
