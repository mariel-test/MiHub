import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const BADGE_TEXT = import.meta.env.VITE_BADGE_TEXT || 'Senior QA Engineering Automation · AI Assisted'

const NAV = [
  { label: 'Presentacion', to: '/' },
  { label: 'Perfil', to: '/perfil' },
  { label: 'Articulos', to: '/articulos' },
  { label: 'Edicion', to: '/edicion' },
]

export default function Header() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={s.header}>
      <div style={s.inner} className="header-inner">
        <div style={s.badge} className="header-badge">
          {BADGE_TEXT}
        </div>

        <button
          style={s.hamburger}
          className="hamburger-btn"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav style={s.navDesktop} className="nav-desktop">
          {NAV.map(({ label, to }) => (
            <Link key={to} to={to} style={{ ...s.navBtn, ...(pathname === to ? s.navBtnActive : {}) }}>
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <div style={s.mobileMenu}>
          {NAV.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              style={{ ...s.mobileLink, ...(pathname === to ? s.mobileLinkActive : {}) }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <div style={s.line} />
    </header>
  )
}

const s = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: '#0d0d0d',
  },
  inner: {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '14px 64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  badge: {
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#4ffbdf',
    border: '1.5px solid #4ffbdf',
    borderRadius: 999,
    padding: '6px 16px',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  hamburger: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: 22,
    cursor: 'pointer',
    padding: '4px 8px',
  },
  navDesktop: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  navBtn: {
    fontSize: 15,
    fontWeight: 500,
    color: '#ffffff',
    border: '1.5px solid #7c3aed',
    borderRadius: 999,
    padding: '8px 20px',
    transition: 'background 0.2s',
    background: 'transparent',
    whiteSpace: 'nowrap',
  },
  navBtnActive: {
    background: '#7c3aed',
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    padding: '0 24px 16px',
  },
  mobileLink: {
    fontSize: 18,
    fontWeight: 500,
    color: '#fff',
    padding: '14px 0',
    borderBottom: '1px solid #222',
  },
  mobileLinkActive: {
    color: '#a78bfa',
  },
  line: {
    height: 1,
    background: '#ffffff18',
  },
}
