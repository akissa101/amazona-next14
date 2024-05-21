'use client';

import { MonitorOffIcon, Moon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    // console.log(theme);
  };

  return (
    <button onClick={toggleTheme} className="rounded-full ">
      {theme === 'light' ? (
        <Moon size={28} stroke="red" color="black" fill="black" />
      ) : (
        <SunIcon size={28} fill="white" />
      )}
    </button>
  );
};

export default ThemeToggle;
