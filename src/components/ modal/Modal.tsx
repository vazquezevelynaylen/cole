import { useEffect, useState } from 'react'

export default function Modal(){
  const [open, setOpen] = useState(false) // por defecto cerrado

  useEffect(() => {
    const onEsc = (e)=>{ if(e.key==='Escape' && open) setOpen(false) }
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [open])

  return (
    <div id="modal-aviso" hidden={!open}>
      <div className="modal-backdrop" style={backdropS} onClick={()=>setOpen(false)}></div>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" style={modalS}>
        <h3 id="modal-title">⚠️ Aviso urgente</h3>
        <p id="modal-msg">Suspensión de clases por corte de luz — Turno mañana.</p>
        <div style={{display:'flex', gap:'.5rem', justifyContent:'flex-end'}}>
          <button id="modal-cancel" type="button" onClick={()=>setOpen(false)}>Cerrar</button>
          <button id="modal-ok" type="button" autoFocus onClick={()=>setOpen(false)}>Entendido</button>
        </div>
      </div>
    </div>
  )
}
const backdropS = {position:'fixed', inset:0, background:'rgba(0,0,0,.5)', backdropFilter:'blur(2px)', zIndex:1500}
const modalS = {position:'fixed', inset:'50% auto auto 50%', transform:'translate(-50%,-50%)', maxWidth:520, background:'var(--card)', border:'1px solid var(--line)', borderRadius:'.9rem', padding:'1rem', boxShadow:'0 20px 40px rgba(0,0,0,.25)', zIndex:1501}
