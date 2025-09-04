import { useEffect } from 'react';

const THEME_KEY = 'theme';
const HC_KEY = 'hc-enabled';

export function useTheme() {
  // Boot (solo una vez)
  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = saved || (prefersDark ? 'dark' : 'light');

    const applyHC = (on: boolean) => document.documentElement.classList.toggle('high-contrast', on);
    applyHC(localStorage.getItem(HC_KEY) === '1');

    // fuente base
    const base = parseInt(localStorage.getItem('fs') || '100', 10);
    document.documentElement.style.fontSize = `${base}%`;
  }, []);

  const toggleContrast = () => {
    const on = !(localStorage.getItem(HC_KEY) === '1');
    localStorage.setItem(HC_KEY, on ? '1' : '0');
    document.documentElement.classList.toggle('high-contrast', on);
  };

  return { toggleContrast };
}
