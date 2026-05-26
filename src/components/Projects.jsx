import SectionTitle from './SectionTitle'
import { projects } from '../data/content'
import { IconExternal, IconGitHub } from './Icons'

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <SectionTitle eyebrow="Selected work" title="Projects I've built end-to-end." />
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card reveal">
              <div className="project-card__media">
                <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" />
              </div>
              <div className="project-card__body">
                <div className="project-card__meta">
                  <h3>{project.name}</h3>
                  <time dateTime={project.date}>{project.date}</time>
                </div>
                <p>{project.description}</p>
                <ul className="project-card__stack">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="project-card__links">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline btn--sm"
                  >
                    <IconExternal />
                    View live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--ghost btn--sm"
                    aria-label={`${project.name} on GitHub`}
                  >
                    <IconGitHub />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
