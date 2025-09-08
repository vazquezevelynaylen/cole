import { useEffect, useState } from 'react'

export default function BackToTop(){
  const [show, setShow] = useState(false)
  useEffect(()=>{
    const onScroll = ()=> setShow((window.scrollY||0) > 500)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])
  if(!show) return null
  return (
    <button
      aria-label="Volver arriba"
      onClick={()=> window.scrollTo({top:0, behavior:'smooth'})}
      style={{
        position:'fixed', right:16, bottom:16, zIndex:1200,
        padding:'.6rem .75rem', borderRadius:'999px',
        border:'1px solid var(--line)', background:'var(--card)', cursor:'pointer'
      }}>
      ↑
    </button>
  )
}
