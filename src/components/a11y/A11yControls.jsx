import './a11y.css'
import { useEffect } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage.js'

export default function A11yControls(){
  const [fs, setFs] = useLocalStorage('fs', 100)
  const [hc, setHc] = useLocalStorage('hc-enabled', '0')

  useEffect(()=>{
    document.documentElement.style.fontSize = fs + '%'
  }, [fs])

  useEffect(()=>{
    const on = hc === '1'
    document.documentElement.classList.toggle('high-contrast', !!on)
  }, [hc])

  return (
    <div className="a11y-controls">
      <button onClick={()=> setHc(hc==='1' ? '0' : '1')}>Alto contraste</button>
      <button onClick={()=> setFs(Math.max(85, fs-5))}>A-</button>
      <button onClick={()=> setFs(100)}>A</button>
      <button onClick={()=> setFs(Math.min(140, fs+5))}>A+</button>
    </div>
  )
}
