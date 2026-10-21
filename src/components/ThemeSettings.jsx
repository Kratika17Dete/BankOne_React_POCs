import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeSettings() {
  const { theme, changeTheme } = useTheme();

  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl font-semibold">
        Appearance
      </h2>

      <label className="block mb-3">
        <input
          type="radio"
          name="theme"
          value="system"
          checked={theme === "system"}
          onChange={() => changeTheme("system")}
        />

        <span className="ml-2">
          System default
        </span>
      </label>

      <label className="block mb-3">
        <input
          type="radio"
          name="theme"
          value="light"
          checked={theme === "light"}
          onChange={() => changeTheme("light")}
        />

        <span className="ml-2">
          Light
        </span>
      </label>

      <label className="block mb-3">
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={theme === "dark"}
          onChange={() => changeTheme("dark")}
        />

        <span className="ml-2">
          Dark
        </span>
      </label>
    </div>
  );
}