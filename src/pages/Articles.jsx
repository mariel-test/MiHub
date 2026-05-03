import Header from '../components/Header'
import Footer from '../components/Footer'
import ArticleCard from '../components/ArticleCard'
import { articles } from '../articles/index.js'

export default function Articles() {
  return (
    <div className="page">
      <Header />
      <main className="page-content">
        <h2 style={s.pageTitle}>Artículos</h2>

        {articles.length === 0 ? (
          <div style={s.empty}>
            <p style={s.emptyTitle}>Próximamente</p>
          </div>
        ) : (
          <div style={s.grid}>
            {articles.map(a => (
              <ArticleCard
                key={a.slug}
                slug={a.slug}
                title={a.title}
                date={a.date}
                description={a.description}
                tags={a.tags}
              />
            ))}
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
  pageTitle: { fontSize: 28, fontWeight: 700, marginBottom: 32, color: '#fff' },
  empty: {
    textAlign: 'center', padding: '80px 20px',
    border: '1px dashed #333', borderRadius: 12,
  },
  emptyTitle: { fontSize: 20, fontWeight: 600, color: '#fff' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: 20,
  },
}
