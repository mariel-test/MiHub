import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PhotoOrInitials from '../components/PhotoOrInitials'

const STATS = [
  { value: '10+', label: 'Años de experiencia' },
  { value: '60%', label: 'Reducción de defectos · Globant/Nissan' },
  { value: '95%', label: 'Backlog eliminado en 30 días' },
  { value: '100%', label: 'Cumplimiento BCRA · Grant Thornton' },
]

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/mariel-test',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/ferreyramariel',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Notion CV',
    href: 'https://www.notion.so/Mariel-Ferreyra-QA-Strategy-Consultant-10-years-ensuring-quality-in-Fintech-Banking-and-e-com-25e7430426c780b3ad1de625fd7aef85',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
      </svg>
    ),
  },
  {
    label: 'mariel.ferreyra@gmail.com',
    href: null,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: '+54 351 615-7152',
    href: null,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.91-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Perfil',
    href: '/perfil',
    internal: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <div className="page">
      <Header />
      <main className="page-content">

        {/* Row 1: name left + photo right */}
        <div style={s.heroRow}>
          <div style={s.heroText}>
            <h1 style={s.heroName} className="hero-name">
              <span style={s.firstName}>Mariel </span>
              <span style={s.lastName}>Ferreyra</span>
            </h1>
          </div>
          <PhotoOrInitials size={140} />
        </div>

        {/* Row 2: bio dos columnas */}
        <div style={s.bioGrid} className="bio-grid">
          <p style={s.bioPara}>
            Ayudo a empresas a anticipar riesgos y alinear la calidad del software con los objetivos del negocio — con 15 años de experiencia que van desde sistemas críticos en Mainframe hasta arquitecturas modernas de automatización con IA.
          </p>
          <p style={s.bioPara}>
            Mi diferencial está en el puente entre estrategia y ejecución: diseño frameworks de testing escalables, migro procesos manuales a pipelines automatizados y tomo decisiones basadas en riesgo antes de que los problemas lleguen a producción. Entiendo QA como disciplina, no como herramienta.
          </p>
          <p style={{ ...s.bioPara, gridColumn: '1 / -1' }}>
            Hoy integro IA para generar datos de prueba sintéticos, detectar anomalías tempranas y escalar la cobertura en sistemas complejos — sin perder trazabilidad ni control.
          </p>
        </div>

        {/* Row 3: social buttons */}
        <div style={s.socials}>
          {SOCIALS.map(({ label, href, icon, internal }) =>
            internal ? (
              <Link key={label} to={href} style={s.socialBtn}>
                {icon}
                <span>{label}</span>
              </Link>
            ) : !href ? (
              <span key={label} style={{ ...s.socialBtn, cursor: 'default', opacity: 0.75 }}>
                {icon}
                <span>{label}</span>
              </span>
            ) : href.startsWith('tel:') ? (
              <a key={label} href={href} style={s.socialBtn}>
                {icon}
                <span>{label}</span>
              </a>
            ) : (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={s.socialBtn}
              >
                {icon}
                <span>{label}</span>
              </a>
            )
          )}
        </div>

        {/* Row 4: impact stats */}
        <div style={s.statsRow} className="stats-row">
          {STATS.map(({ value, label }) => (
            <div key={label} style={s.statItem}>
              <span style={s.statValue}>{value}</span>
              <span style={s.statLabel}>{label}</span>
            </div>
          ))}
        </div>

      </main>
      <Footer next={{ to: '/perfil', label: 'Siguiente' }} />
    </div>
  )
}

const s = {
  heroRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  photo: {
    width: 130,
    height: 130,
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'center top',
    border: '3px solid #7c3aed',
    flexShrink: 0,
  },
  heroText: {
    flex: 1,
    minWidth: 200,
  },
  heroName: {
    fontSize: 'clamp(36px, 6vw, 64px)',
    fontWeight: 900,
    lineHeight: 1.05,
    letterSpacing: '-0.02em',
  },
  firstName: {
    color: '#ffffff',
  },
  lastName: {
    color: '#7c3aed',
  },
  bioGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px 32px',
    marginBottom: 20,
  },
  bioPara: {
    fontSize: '1.15rem',
    lineHeight: 1.7,
    color: '#cccccc',
    margin: 0,
  },
  socials: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  socialBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    fontSize: 14,
    fontWeight: 500,
    color: '#ffffff',
    border: '1.5px solid #333',
    borderRadius: 999,
    padding: '6px 14px',
    background: 'transparent',
    transition: 'border-color 0.2s',
    textDecoration: 'none',
  },
  statsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: 0,
    borderTop: '1px solid #2a2a2a',
    borderBottom: '1px solid #2a2a2a',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: '14px 16px',
    borderRight: '1px solid #2a2a2a',
  },
  statValue: {
    fontSize: 'clamp(24px, 4vw, 36px)',
    fontWeight: 900,
    color: '#4ffbdf',
    lineHeight: 1,
  },
  statLabel: {
    fontSize: 13,
    color: '#888888',
    lineHeight: 1.4,
  },
  contactBar: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginTop: 16,
    padding: '10px 0',
    borderTop: '1px solid #2a2a2a',
    flexWrap: 'wrap',
  },
  contactLink: {
    fontSize: 15,
    color: '#4ffbdf',
    fontWeight: 500,
    textDecoration: 'none',
  },
  contactDot: {
    color: '#444',
    fontSize: 16,
  },
}
