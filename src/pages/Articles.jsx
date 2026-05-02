import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Articles() {
  const [articles] = useState(() => {
    try { return JSON.parse(localStorage.getItem('myhub_articles') || '[]') } catch { return [] }
  })
  const [pdfFiles] = useState(() => {
    try { return JSON.parse(localStorage.getItem('myhub_pdfs') || '[]') } catch { return [] }
  })
  const [pdfIndex, setPdfIndex] = useState(0)

  return (
    <div className="page">
      <Header />
      <main className="page-content">

        <h2 style={s.pageTitle}>Artículos</h2>

        {/* Blog posts */}
        {articles.length === 0 ? (
          <div style={s.empty}>
            <p style={s.emptyTitle}>Todavía no hay artículos</p>
            <p style={s.emptyNote}>Usá la página de Edición para crear tu primer post.</p>
          </div>
        ) : (
          <div style={s.grid}>
            {articles.map((a, i) => (
              <article key={i} style={s.card}>
                <div style={s.cardDate}>{a.date}</div>
                <h3 style={s.cardTitle}>{a.title}</h3>
                <p style={s.cardBody}>{a.body?.slice(0, 280)}{a.body?.length > 280 ? '…' : ''}</p>
              </article>
            ))}
          </div>
        )}

        {/* PDF Carousel */}
        {pdfFiles.length > 0 && (
          <div style={s.carouselSection}>
            <h3 style={s.sectionTitle}>Infografías / PDFs</h3>
            <div style={s.carousel}>
              <button
                style={s.arrow}
                onClick={() => setPdfIndex(i => Math.max(0, i - 1))}
                disabled={pdfIndex === 0}
              >
                ‹
              </button>
              <div style={s.pdfFrame}>
                <iframe
                  src={pdfFiles[pdfIndex]?.url}
                  title={pdfFiles[pdfIndex]?.name}
                  style={{ width: '100%', height: '100%', border: 'none' }}
                />
              </div>
              <button
                style={s.arrow}
                onClick={() => setPdfIndex(i => Math.min(pdfFiles.length - 1, i + 1))}
                disabled={pdfIndex === pdfFiles.length - 1}
              >
                ›
              </button>
            </div>
            <p style={s.pdfName}>{pdfFiles[pdfIndex]?.name} ({pdfIndex + 1}/{pdfFiles.length})</p>
          </div>
        )}

      </main>
      <Footer
        prev={{ to: '/perfil', label: 'Anterior' }}
        next={{ to: '/', label: 'Inicio' }}
      />
    </div>
  )
}

const s = {
  pageTitle: {
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 32,
    color: '#fff',
  },
  empty: {
    textAlign: 'center',
    padding: '80px 20px',
    border: '1px dashed #333',
    borderRadius: 12,
    marginBottom: 48,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 600,
    color: '#fff',
    marginBottom: 8,
  },
  emptyNote: {
    fontSize: 14,
    color: '#666',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: 20,
    marginBottom: 48,
  },
  card: {
    background: '#181818',
    border: '1px solid #2a2a2a',
    borderRadius: 10,
    padding: '20px',
  },
  cardDate: {
    fontSize: 11,
    color: '#555',
    marginBottom: 8,
    fontWeight: 500,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 700,
    color: '#fff',
    marginBottom: 10,
    lineHeight: 1.3,
  },
  cardBody: {
    fontSize: 13,
    color: '#999',
    lineHeight: 1.7,
  },
  carouselSection: {
    marginTop: 48,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#888',
    marginBottom: 20,
    paddingBottom: 8,
    borderBottom: '1px solid #2a2a2a',
  },
  carousel: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  arrow: {
    background: '#222',
    border: '1px solid #333',
    color: '#fff',
    fontSize: 24,
    width: 40,
    height: 40,
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  pdfFrame: {
    flex: 1,
    height: 500,
    background: '#111',
    borderRadius: 8,
    overflow: 'hidden',
    border: '1px solid #2a2a2a',
  },
  pdfName: {
    textAlign: 'center',
    fontSize: 12,
    color: '#666',
    marginTop: 10,
  },
}
