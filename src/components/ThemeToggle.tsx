import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    const dark = saved === 'dark';
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('portfolio-theme', next ? 'dark' : 'light');
      return next;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-lg border border-card-border bg-card-bg text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors"
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;
