import React from 'react';
import './section-header.css';

/**
 * Encabezado con imagen de fondo + overlay
 * Ejemplo:
 * <SectionHeader title="Comunicados" image="/img/headers/comunicados.jpg" />
 */
export default function SectionHeader({ title, subtitle, image, height = 220 }) {
  return (
    <div className="section-header reveal" style={{'--hdr-h': `${height}px`}}>
      <div className="section-header__media" style={{ backgroundImage: `url(${image})` }} />
      <div className="section-header__tint" aria-hidden />
      <div className="section-header__inner">
        <h2 className="section-header__title">{title}</h2>
        {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}
