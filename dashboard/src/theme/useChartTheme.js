import { useMemo } from "react";
import { useTheme } from "./ThemeContext";

export function useChartTheme() {
  const { isDark } = useTheme();

  return useMemo(
    () => ({
      legendColor: isDark ? "#c9d1d9" : "#374151",
      gridColor: isDark ? "rgba(48, 54, 61, 0.8)" : "rgba(0, 0, 0, 0.06)",
      titleColor: isDark ? "#e8eaed" : "#313131",
      tooltipBg: isDark ? "#1c2330" : "#ffffff",
      tooltipText: isDark ? "#e8eaed" : "#313131",
    }),
    [isDark],
  );
}
