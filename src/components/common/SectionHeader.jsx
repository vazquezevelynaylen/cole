export default function SectionHeader({ title, subtitle, id }) {
  return (
    <header style={{margin: "24px 0 12px"}}>
      {subtitle && <p style={{opacity:.75, margin:0}}>{subtitle}</p>}
      <h2 id={id} style={{margin:"6px 0 0"}}>{title}</h2>
    </header>
  );
}
