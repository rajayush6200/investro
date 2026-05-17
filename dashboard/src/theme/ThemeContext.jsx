import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { THEMES } from "./themeConstants";
import { applyTheme, getStoredTheme, initThemeFromStorage } from "./themeUtils";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => getStoredTheme());

  useEffect(() => {
    initThemeFromStorage();
    setThemeState(getStoredTheme());
  }, []);

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "investro-theme" && e.newValue) {
        const next = applyTheme(e.newValue);
        setThemeState(next);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setTheme = useCallback((next) => {
    const resolved = applyTheme(next);
    setThemeState(resolved);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
  }, [theme, setTheme]);

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === THEMES.DARK,
      setTheme,
      toggleTheme,
    }),
    [theme, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
