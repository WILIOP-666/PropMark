"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("propmark_theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("propmark_theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("propmark_theme", "light");
    }
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-ink-10 flex items-center justify-center opacity-0">
        <Sun className="w-4 h-4" />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={theme === "dark"}
      title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      aria-label="Toggle Dark / Light Mode"
      className="relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border border-ink-10 bg-surface-light p-1 transition-colors duration-300 focus:outline-none hover:border-ink-40"
    >
      {/* Background Icons in track */}
      <span className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
        <Sun className="w-3.5 h-3.5 text-accent-gold opacity-70" />
        <Moon className="w-3.5 h-3.5 text-accent-lavender opacity-70" />
      </span>

      {/* Sliding Knob */}
      <span
        className={`pointer-events-none relative flex h-6 w-6 items-center justify-center rounded-full bg-surface shadow-sm border border-ink-10 transition-transform duration-300 ease-in-out ${
          theme === "dark"
            ? "translate-x-6 text-accent-lavender"
            : "translate-x-0 text-accent-gold"
        }`}
      >
        {theme === "dark" ? (
          <Moon className="w-3.5 h-3.5" />
        ) : (
          <Sun className="w-3.5 h-3.5" />
        )}
      </span>
    </button>
  );
}
