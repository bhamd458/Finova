'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded"
    >
      Toggle {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
}
