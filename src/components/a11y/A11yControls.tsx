import { useEffect } from 'react'

export default function A11yControls(){
  useEffect(() => {
    // Contraste
    const btn = document.getElementById('contrast-toggle')
    const KEY='hc-enabled'
    const apply = on => document.documentElement.classList.toggle('high-contrast', !!on)
    apply(localStorage.getItem(KEY)==='1')
    btn?.addEventListener('click', ()=>{
      const on = !(localStorage.getItem(KEY)==='1')
      localStorage.setItem(KEY, on?'1':'0'); apply(on)
    })
  }, [])

  useEffect(() => {
    // Tamaño de fuente
    const plus=document.getElementById('font-plus'),
          minus=document.getElementById('font-minus'),
          reset=document.getElementById('font-reset')
    let base=parseInt(localStorage.getItem('fs')||'100',10)
    const apply=()=>{ document.documentElement.style.fontSize=base+'%'; localStorage.setItem('fs', String(base)); }
    plus && plus.addEventListener('click',()=>{ base=Math.min(140,base+5); apply(); })
    minus&& minus.addEventListener('click',()=>{ base=Math.max(85,base-5); apply(); })
    reset&& reset.addEventListener('click',()=>{ base=100; apply(); })
    apply()
  }, [])

  return (
    <div className="a11y-controls" style={{position:'fixed', right:12, bottom:12, display:'flex', gap:'.4rem', zIndex:1200}}>
      <button id="contrast-toggle" type="button" style={btnS}>Alto contraste</button>
      <button id="font-minus" type="button" style={btnS}>A-</button>
      <button id="font-reset" type="button" style={btnS}>A</button>
      <button id="font-plus" type="button" style={btnS}>A+</button>
    </div>
  )
}
const btnS = { padding:'.35rem .55rem', borderRadius:'.5rem', border:'1px solid var(--line)', background:'var(--card)', color:'inherit', cursor:'pointer' }
