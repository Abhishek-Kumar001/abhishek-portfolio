import SectionTitle from './SectionTitle'
import { education } from '../data/content'
import { IconSchool } from './Icons'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionTitle eyebrow="Education" title="Academic background." />
        <div className="education-grid">
          {education.map((item) => (
            <article key={item.school} className="edu-card reveal">
              <IconSchool />
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
              <span className="edu-card__period">{item.period}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
