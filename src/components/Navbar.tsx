import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 60)
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [location.pathname])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const dark = scrolled && !menuOpen

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        menuOpen
          ? 'bg-neutral-950'
          : scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-neutral-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none">
          <span
            className={`font-montserrat font-black text-xl tracking-[0.18em] transition-colors duration-300 ${
              dark ? 'text-neutral-900' : 'text-white'
            }`}
          >
            PLURAL
          </span>
          <span
            className={`text-[9px] tracking-[0.3em] uppercase font-medium transition-colors duration-300 ${
              dark ? 'text-brand' : 'text-brand'
            }`}
          >
            Eng &amp; Arq
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`relative text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-200 group ${
                dark
                  ? location.pathname === to
                    ? 'text-neutral-900'
                    : 'text-neutral-400 hover:text-neutral-900'
                  : location.pathname === to
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-brand transition-all duration-300 ${
                  location.pathname === to ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-full h-px transition-all duration-300 origin-center ${
                dark ? 'bg-neutral-800' : 'bg-white'
              } ${
                menuOpen && i === 0
                  ? 'rotate-45 translate-y-[6px]'
                  : menuOpen && i === 1
                  ? 'opacity-0'
                  : menuOpen && i === 2
                  ? '-rotate-45 -translate-y-[6px]'
                  : ''
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="px-8 pt-4 pb-10 flex flex-col gap-6 border-t border-white/10">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm tracking-[0.15em] uppercase font-medium transition-colors ${
                location.pathname === to ? 'text-brand' : 'text-white/70 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
