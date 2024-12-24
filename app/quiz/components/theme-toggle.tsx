// components/theme-toggle.tsx
"use client";

import { useTheme } from "../../providers/theme-provider";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-violet-700 dark:bg-violet-900 hover:bg-violet-800 dark:hover:bg-violet-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};
