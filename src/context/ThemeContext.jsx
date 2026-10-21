import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  // User preference: system | light | dark
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("app-theme");

    return ["system", "light", "dark"].includes(savedTheme)
      ? savedTheme
      : "system";
  });

  // The theme actually displayed by the application
  const [resolvedTheme, setResolvedTheme] = useState("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const applyTheme = () => {
      let actualTheme;

      if (theme === "system") {
        actualTheme = mediaQuery.matches ? "dark" : "light";
      } else {
        actualTheme = theme;
      }

      // Apply dark class to <html>
      document.documentElement.classList.toggle(
        "dark",
        actualTheme === "dark"
      );

      // Optional, but useful for browser/native controls
      document.documentElement.style.colorScheme = actualTheme;

      setResolvedTheme(actualTheme);

      console.log("Selected theme:", theme);
      console.log("System dark:", mediaQuery.matches);
      console.log("Actual theme:", actualTheme);
    };

    applyTheme();

    const handleSystemThemeChange = () => {
      if (theme === "system") {
        applyTheme();
      }
    };

    mediaQuery.addEventListener(
      "change",
      handleSystemThemeChange
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleSystemThemeChange
      );
    };
  }, [theme]);

  const changeTheme = (newTheme) => {
    if (!["system", "light", "dark"].includes(newTheme)) {
      return;
    }

    localStorage.setItem("app-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
};

//in console
// localStorage.removeItem("app-theme");
// location.reload();