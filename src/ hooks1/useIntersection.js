import { useEffect } from 'react'
export function useIntersection(target, options, onChange){
  useEffect(()=>{
    if(!target?.current) return
    const io = new IntersectionObserver((entries)=> onChange(entries[0]), options)
    io.observe(target.current)
    return ()=> io.disconnect()
  }, [target, options, onChange])
}