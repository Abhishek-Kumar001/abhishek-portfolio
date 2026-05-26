import { contact } from '../data/content'
import { IconMail, IconPhone } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-card reveal">
          <div className="contact-card__glow" aria-hidden="true" />
          <span className="section-eyebrow">Let&apos;s build something</span>
          <h2 className="contact-card__title">Looking for a full stack AI engineer?</h2>
          <p>
            I&apos;m actively interviewing. Drop a mail or give me a call — I usually reply within a
            few hours.
          </p>
          <div className="contact-card__actions">
            <a href={`mailto:${contact.email}`} className="btn btn--primary btn--lg">
              <IconMail />
              {contact.email}
            </a>
            <a href={contact.phoneHref} className="btn btn--outline btn--lg">
              <IconPhone />
              {contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
