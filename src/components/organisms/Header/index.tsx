import { useState } from 'react'
import logo from '../../../assets/simple-tree.svg'
import styles from './styles.module.scss'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Downloads', href: '/downloads' },
  { name: 'Contact', href: '/contact' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  // A helper to combine classes conditionally for the mobile menu
  const mobileNavClasses = [styles.mobileNav, isOpen ? styles.isOpen : ''].join(
    ' '
  )

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <div className={styles.navContent}>
          <a href="/" className={styles.brand}>
            <img
              src={logo.src}
              alt="Image of a tree"
              className={styles.logo}
              loading="lazy"
              aria-hidden="true"
            />
            <span>Chayah Education</span>
          </a>

          {/* Desktop Menu */}
          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={styles.navLink}>
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className={styles.mobileMenuButtonContainer}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={styles.mobileMenuButton}
              aria-label="toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg viewBox="0 0 24 24" className={styles.hamburgerIcon}>
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className={mobileNavClasses}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={styles.mobileNavLink}
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
