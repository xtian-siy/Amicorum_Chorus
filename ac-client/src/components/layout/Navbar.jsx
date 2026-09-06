import { useEffect, useState } from 'react'
import { navigation } from '../../data/navigation.js'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnResize = () => window.innerWidth > 900 && setIsOpen(false)
    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="announcement">
        <p>New voices are always welcome.</p>
        <a href="/join">Learn about joining <span aria-hidden="true">↗</span></a>
      </div>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Amicorum Chorus home">
          <img className="brand-logo" src="/images/branding/amicorum-mark.png" alt="" />
          <span className="brand-copy"><strong>Amicorum</strong><small>Chorus</small></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span>{isOpen ? 'Close' : 'Menu'}</span>
          <span className="menu-lines" aria-hidden="true"><i /><i /></span>
        </button>

        <nav id="primary-navigation" className={isOpen ? 'primary-nav is-open' : 'primary-nav'} aria-label="Primary navigation">
          {navigation.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setIsOpen(false)} aria-current={window.location.pathname === href ? 'page' : undefined}>{label}</a>
          ))}
          <a className="nav-cta" href="/contact" onClick={() => setIsOpen(false)} aria-current={window.location.pathname === '/contact' ? 'page' : undefined}>Invite us</a>
        </nav>
      </header>
    </>
  )
}
