import { ReactNode, useEffect } from 'react';
import './modal.css';

export default function Modal({
  open,
  onClose,
  title,
  children
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && open) onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
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
  );
}
