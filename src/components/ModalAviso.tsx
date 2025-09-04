import { useState } from 'react'

export default function ModalAviso() {
  const [isOpen, setIsOpen] = useState(false)

  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={() => setIsOpen(false)}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>Aviso Importante</h2>
        <p>Contenido del modal de aviso.</p>
        <button onClick={() => setIsOpen(false)}>Cerrar</button>
      </div>
    </div>
  )
}