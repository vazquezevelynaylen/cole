import './modal.css'

export default function Modal({ open, title = 'Aviso', onClose, children }){
  if(!open) return null
  return (
    <div className="modal-root" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal">
        <h3 id="modal-title">{title}</h3>
        <div>{children}</div>
        <div className="modal-actions">
          <button type="button" onClick={onClose}>Cerrar</button>
          <button type="button" autoFocus onClick={onClose}>Entendido</button>
        </div>
      </div>
    </div>
  )
}
