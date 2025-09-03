import { NavigationMenu } from 'radix-ui'
import { Dialog } from 'radix-ui'
import { Cross1Icon } from '@radix-ui/react-icons'

import styles from './styles.module.scss'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Downloads', href: '/downloads' },
  { name: 'Contact', href: '/contact' },
]

const Header = () => {
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
                <NavigationMenu.Item key={link.name}>
                  <NavigationMenu.Link className={styles.link} href={link.href}>
                    {link.name}
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Mobile Menu Button */}

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <div className={styles.mobileMenuButtonContainer}>
                <button
                  type="button"
                  className={styles.mobileMenuButton}
                  aria-label="toggle menu"
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
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className={styles.overlay} />
              <Dialog.Content className={styles.content}>
                <Dialog.Title className={styles.hiddenText}>
                  Mobile navigation menu
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button className={styles.iconButton} aria-label="Close">
                    <Cross1Icon />
                  </button>
                </Dialog.Close>
                <nav className={styles.mobileNavList}>
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className={styles.mobileNavLink}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </nav>
    </header>
  )
}

export default Header
