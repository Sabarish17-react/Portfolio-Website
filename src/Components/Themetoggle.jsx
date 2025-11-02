import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Themetoggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      if (storedTheme === "dark")
        document.documentElement.classList.add("dark");
      setIsDarkMode(storedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true);
      }
    }
  }, []);

  const handleToggle = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="fixed top-5 right-6 z-50 p-3 rounded-full 
                 bg-[hsl(var(--card))] border border-[hsl(var(--border))] 
                 shadow-md hover:scale-110 transition-all duration-300"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300 transition-transform duration-300 rotate-180" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900 transition-transform duration-300 rotate-0" />
      )}
    </button>
  );
};

export default Themetoggle;
