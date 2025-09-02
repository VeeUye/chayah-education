import { useState } from 'react'
import classNames from 'classnames'
import { NavigationMenu } from 'radix-ui'

import styles from './styles.module.scss'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Downloads', href: '/downloads' },
  { name: 'Contact', href: '/contact' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <div className={styles.navContent}>
          <a href="/" className={styles.brand}>
            <span>Chayah Education</span>
          </a>

          <NavigationMenu.Root className={styles.navRoot}>
            <NavigationMenu.List className={styles.menuList}>
              {navLinks.map((link) => (
                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className={styles.link}
                    key={link.name}
                    href={link.href}
                  >
                    {link.name}
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>

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
        <div
          id="mobile-menu"
          className={classNames(styles.mobileNav, { [styles.isOpen]: isOpen })}
        >
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
