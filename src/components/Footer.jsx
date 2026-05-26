import { contact, socialLinks } from '../data/content'
import { IconGitHub, IconLinkedIn, IconMail } from './Icons'

const footerIcons = {
  GitHub: IconGitHub,
  LinkedIn: IconLinkedIn,
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {year} Abhishek Kumar. Built with React + Vite.</p>
        <div className="footer__links">
          {socialLinks.slice(0, 2).map((link) => {
            const Icon = footerIcons[link.label]
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <Icon />
              </a>
            )
          })}
          <a href={`mailto:${contact.email}`} aria-label="Email">
            <IconMail />
          </a>
        </div>
      </div>
    </footer>
  )
}
