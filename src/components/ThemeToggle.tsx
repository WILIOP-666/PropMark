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
      title={theme === "light" ? "Switch to Dark Editorial" : "Switch to Light Paper"}
      aria-label="Toggle dark/light theme"
      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-ink-10 bg-surface text-[#3c3a39] hover:border-ink-40 transition-colors text-xs font-mono"
    >
      {theme === "light" ? (
        <>
          <Moon className="w-3.5 h-3.5 text-accent-lavender" />
          <span className="hidden sm:inline">Dark</span>
        </>
      ) : (
        <>
          <Sun className="w-3.5 h-3.5 text-accent-gold" />
          <span className="hidden sm:inline">Light</span>
        </>
      )}
    </button>
  );
}
