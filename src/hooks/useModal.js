import { useState, useCallback } from 'react'
export function useModal(defaultOpen=false){
  const [open, setOpen] = useState(defaultOpen)
  const show = useCallback(()=> setOpen(true),[])
  const hide = useCallback(()=> setOpen(false),[])
  return { open, show, hide }
}