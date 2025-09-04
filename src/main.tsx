import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/tokens.css'
import './styles/global.css'
import './styles/components.css'

// Tema inicial + alto contraste (igual que tu HTML original)
(function initTheme() {
  const saved = localStorage.getItem('theme')
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
  const theme = saved || (prefersDark ? 'dark' : 'light')
  document.documentElement.dataset.theme = theme

  const HC_KEY = 'hc-enabled'
  const on = localStorage.getItem(HC_KEY) === '1'
  document.documentElement.classList.toggle('high-contrast', on)
})()

const el = document.getElementById('root')!
createRoot(el).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
