import SectionTitle from './SectionTitle'
import { experience } from '../data/content'
import { IconWork } from './Icons'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle eyebrow="Experience" title="Where I've made impact." />
        <div className="timeline">
          {experience.map((job) => (
            <article key={job.company} className="timeline__item reveal">
              <div className="timeline__dot" />
              <div className="timeline__card">
                <div className="timeline__header">
                  <div>
                    <h3 className="timeline__role">
                      <IconWork />
                      {job.role}
                    </h3>
                    <p className="timeline__company">{job.company}</p>
                  </div>
                  <span className="timeline__period">{job.period}</span>
                </div>
                <ul className="timeline__points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
