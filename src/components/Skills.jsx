import SectionTitle from './SectionTitle'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionTitle eyebrow="Toolkit" title="Tech I work with daily." />
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <article key={category} className="skill-card reveal">
              <h3 className="skill-card__title">{category}</h3>
              <ul className="skill-card__tags">
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
