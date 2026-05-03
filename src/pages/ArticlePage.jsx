import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getArticle } from '../articles/index.js'

export default function ArticlePage() {
  const { slug } = useParams()
  const article = getArticle(slug)

  if (!article) {
    return (
      <div className="page">
        <Header />
        <main className="page-content" style={{ textAlign: 'center', paddingTop: 80 }}>
          <p style={{ color: '#999', fontSize: 18, marginBottom: 24 }}>Artículo no encontrado.</p>
          <Link to="/articulos" style={{ color: '#4ffbdf', fontSize: 14 }}>
            ← Volver a artículos
          </Link>
        </main>
      </div>
    )
  }

  const { Component, title, date, tags = [] } = article
  const formatted = date
    ? new Date(date + 'T12:00:00').toLocaleDateString('es-AR', {
        year: 'numeric', month: 'long', day: 'numeric',
      })
    : ''

  return (
    <div className="page">
      <Header />
      <main className="page-content">
        <Link to="/articulos" style={s.back}>← Volver a artículos</Link>

        <header style={s.articleHeader}>
          {formatted && <div style={s.date}>{formatted}</div>}
          <h1 style={s.title}>{title}</h1>
          {tags.length > 0 && (
            <div style={s.tags}>
              {tags.map(t => <span key={t} style={s.tag}>{t}</span>)}
            </div>
          )}
        </header>

        <div className="mdx-prose">
          <Component />
        </div>
      </main>
      <Footer
        prev={{ to: '/articulos', label: 'Artículos' }}
        next={{ to: '/', label: 'Inicio' }}
      />
    </div>
  )
}

const s = {
  back: { color: '#4ffbdf', fontSize: 14, display: 'inline-block', marginBottom: 32 },
  articleHeader: {
    marginBottom: 40,
    paddingBottom: 32,
    borderBottom: '1px solid #2a2a2a',
  },
  date: {
    fontSize: 11, color: '#555', fontWeight: 500,
    textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12,
  },
  title: {
    fontSize: 'clamp(24px, 4vw, 36px)',
    fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 16,
  },
  tags: { display: 'flex', flexWrap: 'wrap', gap: 6 },
  tag: {
    fontSize: 11, fontWeight: 600, letterSpacing: '0.08em',
    background: '#1a1020', color: '#a78bfa',
    border: '1px solid #3d1e6b', borderRadius: 999, padding: '3px 10px',
  },
}
