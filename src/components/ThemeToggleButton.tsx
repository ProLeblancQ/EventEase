/**
 * ThemeToggleButton Component
 *
 * A button to toggle between day and night mode themes.
 * Changes the background image across the entire application.
 *
 * Features:
 * - Toggles between light and dark mode
 * - Uses Material Icons (light-mode / dark-mode)
 * - Same styling as other IconButtons
 *
 * Props:
 * - None (uses ThemeContext internally)
 */

import React from "react";
import IconButton from "./IconButton";
import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggleButton() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <IconButton
      iconName={isDarkMode ? "light-mode" : "dark-mode"}
      onPress={toggleTheme}
    />
  );
}
