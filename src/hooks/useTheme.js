import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage.js'

export function useTheme(){
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage('theme', prefersDark ? 'dark' : 'light')

  useEffect(()=>{
    document.documentElement.dataset.theme = theme
  }, [theme])

  return [theme, setTheme]
}
