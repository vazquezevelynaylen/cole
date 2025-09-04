import { useState, useEffect } from 'react'

export default function A11yControls() {
  const [highContrast, setHighContrast] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const hcEnabled = localStorage.getItem('hc-enabled') === '1'
    const savedTheme = localStorage.getItem('theme') || 'light'
    
    setHighContrast(hcEnabled)
    setTheme(savedTheme)
    
    document.documentElement.classList.toggle('high-contrast', hcEnabled)
    document.documentElement.dataset.theme = savedTheme
  }, [])

  const toggleHighContrast = () => {
    const newValue = !highContrast
    setHighContrast(newValue)
    localStorage.setItem('hc-enabled', newValue ? '1' : '0')
    document.documentElement.classList.toggle('high-contrast', newValue)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.dataset.theme = newTheme
  }

  return (
    <div className="a11y-controls">
      <button onClick={toggleHighContrast} aria-pressed={highContrast}>
        {highContrast ? 'Desactivar' : 'Activar'} Alto Contraste
      </button>
      <button onClick={toggleTheme}>
        Cambiar a tema {theme === 'light' ? 'oscuro' : 'claro'}
      </button>
    </div>
  )
}