"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Only run on client side
  useEffect(() => {
    setMounted(true);
    // Check if dark mode is enabled
    const darkModeEnabled = document.documentElement.classList.contains('dark');
    setIsDark(darkModeEnabled);
  }, []);

  // Toggle theme
  function toggleTheme() {
    // Toggle dark class on html element
    document.documentElement.classList.toggle('dark');
    
    // Store preference
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  }

  // Prevent hydration errors
  if (!mounted) {
    return <div style={{ width: '40px', height: '40px' }}></div>;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        padding: '8px',
        borderRadius: '50%',
        backgroundColor: isDark ? 'var(--color-card-dark)' : 'var(--color-card)',
        color: isDark ? 'var(--color-text)' : 'var(--color-heading)',
        cursor: 'pointer',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.2s ease, color 0.2s ease',
      }}
    >
      {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
} 