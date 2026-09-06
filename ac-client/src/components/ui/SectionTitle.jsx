export default function SectionTitle({ eyebrow, title, copy, inverse = false }) {
  return (
    <header className={`section-heading${inverse ? ' inverse' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </header>
  )
}
