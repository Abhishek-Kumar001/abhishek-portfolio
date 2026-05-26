import SectionTitle from './SectionTitle'
import { stats } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle eyebrow="About me" title="A full stack AI engineer who ships." />
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I specialize in turning complex requirements into clean, performant full-stack
              applications. From AI-powered SaaS dashboards to real-time chat apps, I focus on
              writing maintainable TypeScript, building scalable Node.js backends, optimizing
              performance, and crafting interfaces users actually enjoy using.
            </p>
            <p>
              Currently building HR automation and AI tooling at{' '}
              <strong>Techpearl</strong>. Open to full stack AI roles where craft, performance, and
              UX matter.
            </p>
          </div>
          <div className="stats-grid">
            {stats.map((s) => (
              <article key={s.label} className="stat-card reveal">
                <span className="stat-card__value">{s.value}</span>
                <span className="stat-card__label">{s.label}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
