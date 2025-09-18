import { type PropsWithChildren } from "react";
import {
  ThemeContext,
  type Theme,
  type ThemeContextType,
} from "../contexts/ThemeContext";
import { useLocalStorageSlice } from "../hooks/useLocalStorageSlice";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { state: theme, saveState: setTheme } = useLocalStorageSlice<Theme>(
    "theme",
    "light"
  );

  const isDark = theme === "dark";

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
  };

  const value: ThemeContextType = {
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
