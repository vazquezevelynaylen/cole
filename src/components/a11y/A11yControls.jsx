import { useTheme } from '@hooks/useTheme';
import './a11y.css';

export default function A11yControls() {
  const { toggleContrast } = useTheme();

  const applyFont = (base: number) => {
    document.documentElement.style.fontSize = `${base}%`;
    localStorage.setItem('fs', String(base));
  };

  const onPlus = () => {
    const base = Math.min(140, parseInt(localStorage.getItem('fs') || '100', 10) + 5);
    applyFont(base);
  };
  const onMinus = () => {
    const base = Math.max(85, parseInt(localStorage.getItem('fs') || '100', 10) - 5);
    applyFont(base);
  };
  const onReset = () => applyFont(100);

  return (
    <div className="a11y-controls">
      <button onClick={toggleContrast} type="button" aria-pressed={document.documentElement.classList.contains('high-contrast')}>
        Alto contraste
      </button>
      <button onClick={onMinus} type="button">A-</button>
      <button onClick={onReset} type="button">A</button>
      <button onClick={onPlus} type="button">A+</button>
    </div>
  );
}
