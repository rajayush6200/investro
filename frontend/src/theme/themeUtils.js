import { THEME_STORAGE_KEY, THEMES } from "./themeConstants";

export function getStoredTheme() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === THEMES.LIGHT || stored === THEMES.DARK) {
      return stored;
    }
  } catch {
    /* ignore */
  }
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? THEMES.DARK
      : THEMES.LIGHT;
  }
  return THEMES.LIGHT;
}

export function applyTheme(theme) {
  const resolved =
    theme === THEMES.DARK || theme === THEMES.LIGHT ? theme : THEMES.LIGHT;
  document.documentElement.setAttribute("data-theme", resolved);
  document.documentElement.setAttribute("data-bs-theme", resolved);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, resolved);
  } catch {
    /* ignore */
  }
  return resolved;
}

export function initThemeFromStorage() {
  return applyTheme(getStoredTheme());
}
