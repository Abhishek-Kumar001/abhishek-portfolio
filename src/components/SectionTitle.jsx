export default function SectionTitle({ eyebrow, title }) {
  return (
    <div className="section-title reveal">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-heading">{title}</h2>
      <span className="section-accent" />
    </div>
  )
}
