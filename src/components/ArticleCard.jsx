import { Link } from 'react-router-dom'

export default function ArticleCard({ slug, title, date, description, tags = [] }) {
  const formatted = date
    ? new Date(date + 'T12:00:00').toLocaleDateString('es-AR', {
        year: 'numeric', month: 'long', day: 'numeric',
      })
    : ''

  return (
    <Link to={`/articulos/${slug}`} style={s.link}>
      <article style={s.card}>
        {formatted && <div style={s.date}>{formatted}</div>}
        <h3 style={s.title}>{title}</h3>
        {description && <p style={s.desc}>{description}</p>}
        {tags.length > 0 && (
          <div style={s.tags}>
            {tags.map(tag => <span key={tag} style={s.tag}>{tag}</span>)}
          </div>
        )}
        <span style={s.readMore}>Leer artículo →</span>
      </article>
    </Link>
  )
}

const s = {
  link: { textDecoration: 'none', display: 'block' },
  card: {
    background: '#181818',
    border: '1px solid #2a2a2a',
    borderRadius: 10,
    padding: '24px',
    transition: 'border-color 0.2s, background 0.2s',
    cursor: 'pointer',
    height: '100%',
  },
  date: { fontSize: 11, color: '#555', marginBottom: 8, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' },
  title: { fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 10, lineHeight: 1.3 },
  desc: { fontSize: 14, color: '#999', lineHeight: 1.7, marginBottom: 16 },
  tags: { display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 },
  tag: {
    fontSize: 11, fontWeight: 600, letterSpacing: '0.08em',
    background: '#1a1020', color: '#a78bfa',
    border: '1px solid #3d1e6b', borderRadius: 999,
    padding: '3px 10px',
  },
  readMore: { fontSize: 13, color: '#4ffbdf', fontWeight: 600 },
}
