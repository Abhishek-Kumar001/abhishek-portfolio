import { useEffect, useState } from 'react'
import { navSections, contact } from '../data/content'
import { IconMail, IconMenu, IconClose } from './Icons'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="logo" onClick={closeMenu}>
          Abhishek.dev
        </a>

        <nav className="nav-desktop" aria-label="Main navigation">
          {navSections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="nav-link">
              {s.label}
            </a>
          ))}
        </nav>

        <a href={`mailto:${contact.email}`} className="btn btn--primary btn--sm nav-cta-desktop">
          <IconMail />
          Hire me
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      <div className={`nav-mobile ${menuOpen ? 'nav-mobile--open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {navSections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="nav-mobile__link" onClick={closeMenu}>
              {s.label}
            </a>
          ))}
          <a href={`mailto:${contact.email}`} className="btn btn--primary" onClick={closeMenu}>
            <IconMail />
            Hire me
          </a>
        </nav>
      </div>
    </header>
  )
}
