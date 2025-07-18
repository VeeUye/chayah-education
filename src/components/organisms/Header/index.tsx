import { useState } from 'react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Downloads', href: '/downloads' },
  { name: 'Contact', href: '/contact' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-gray-800">
            Chayah Education
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded px-3 py-2 text-gray-600 hover:bg-gray-100"
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} mt-4 md:hidden`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block rounded px-3 py-2 text-gray-600 hover:bg-gray-100"
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
