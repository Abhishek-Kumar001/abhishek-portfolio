import { contact, socialLinks } from '../data/content'
import { IconGitHub, IconLinkedIn, IconCode, IconMail, IconPhone, IconLocation } from './Icons'

const socialIcons = {
  GitHub: IconGitHub,
  LinkedIn: IconLinkedIn,
  LeetCode: IconCode,
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__blob hero__blob--purple" />
      <div className="hero__blob hero__blob--cyan" />
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="badge reveal">
            <span className="badge__dot" />
            Available for hire
          </span>

          <p className="hero__greeting reveal">Hi, I&apos;m</p>
          <h1 className="hero__name reveal">Abhishek Kumar</h1>
          <h2 className="hero__title reveal">
            Full Stack AI Engineer · MERN Stack &amp; LLM Applications
          </h2>
          <p className="hero__bio reveal">
            Hi, I&apos;m Abhishek — a Full Stack AI Engineer who loves building fast, scalable, and
            AI-powered web apps, chatbots, and LLM workflows using LangChain and LangGraph. Over the
            past year I&apos;ve shipped production SaaS features to 5000+ users, integrated AI into
            real-world workflows, and obsessed over performance, clean code, and great UX. Currently
            working with React, AI, Node.js, and chatbots — always exploring what&apos;s next.
          </p>

          <div className="hero__actions reveal">
            <a href={`mailto:${contact.email}`} className="btn btn--primary btn--lg">
              <IconMail />
              Email me
            </a>
            <a href={contact.phoneHref} className="btn btn--outline btn--lg">
              <IconPhone />
              {contact.phone}
            </a>
          </div>

          <div className="hero__social reveal">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.label]
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label={link.label}
                >
                  <Icon />
                </a>
              )
            })}
            <span className="hero__location">
              <IconLocation />
              {contact.location}
            </span>
          </div>
        </div>

        <div className="hero__visual reveal" aria-hidden="true">
          <div className="avatar-card">
            <div className="avatar-card__ring" />
            <div className="avatar-card__initials">AK</div>
          </div>
        </div>
      </div>
    </section>
  )
}
