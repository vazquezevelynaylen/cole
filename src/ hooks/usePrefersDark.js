import { useEffect } from 'react'

export default function usePrefersDark(){
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.dataset.theme = saved || (prefersDark ? 'dark' : 'light')
  }, [])
}
