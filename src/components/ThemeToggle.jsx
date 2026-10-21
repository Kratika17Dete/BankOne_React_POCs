import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { resolvedTheme, changeTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    changeTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      title={
        isDark
          ? "Switch to Light mode"
          : "Switch to Dark mode"
      }
      className="
        w-10 h-10 rounded-full
        border border-gray-300 dark:border-gray-600
        flex items-center justify-center
        bg-white dark:bg-gray-800
        shadow-sm
      "
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;