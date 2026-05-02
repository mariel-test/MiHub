import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

function useArticle() {
  try {
    const articles = JSON.parse(localStorage.getItem('myhub_articles') || '[]')
    return articles[0] || null
  } catch { return null }
}

function CopyBox({ label, content, note }) {
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div style={s.copyBox}>
      <div style={s.copyHeader}>
        <span style={s.copyLabel}>{label}</span>
        {note && <span style={s.copyNote}>{note}</span>}
        <button style={s.copyBtn(copied)} onClick={copy}>
          {copied ? '✓ Copiado' : 'Copiar'}
        </button>
      </div>
      <pre style={s.pre}>{content}</pre>
    </div>
  )
}

function buildLinkedIn(article) {
  if (!article) return '— Crea un artículo desde Edición primero —'
  return `📌 ${article.title}

${article.body}

#QAAutomation #Testing #AI #SoftwareQuality #QAEngineering`
}

function buildLinkedInCarousel(article) {
  if (!article) return '— Crea un artículo desde Edición primero —'
  return `🎯 Slide 1: ${article.title}

📍 Slide 2: El problema
${article.body?.slice(0, 200)}...

📍 Slide 3: Mi enfoque
[Describí tu metodología aquí]

📍 Slide 4: Resultados
60% reducción de defectos · 95% backlog en 30 días

📍 Slide 5: CTA
¿Te identificás con esto? Guardá este post 👇

#QAAutomation #AITesting #TestingStrategy`
}

function buildInstagram(article) {
  if (!article) return '— Crea un artículo desde Edición primero —'
  const caption = article.body?.slice(0, 300) || ''
  return `${article.title} 👇

${caption}${caption.length < article.body?.length ? '...' : ''}

.
.
.
#QAEngineer #AutomationTesting #AITesting #SoftwareTesting #TechLatam #MujeresEnTech #ProgramaciónEnEspañol #TestingAutomatizado #DevOps #Python #Playwright #LLMTesting`
}

function buildYouTube(article) {
  if (!article) return '— Crea un artículo desde Edición primero —'
  return `DESCRIPCIÓN:
${article.title}

En este video explico: ${article.body?.slice(0, 150)}...

⏱ Timestamps:
0:00 Intro
1:00 El problema
3:00 Mi solución
6:00 Demo
9:00 Resultados
10:00 Conclusión

🔗 Links:
GitHub: https://github.com/mariel-test
LinkedIn: https://linkedin.com/in/ferreyramariel

#QAAutomation #Testing #AI

---
GUIÓN:

[INTRO - 30 seg]
Hola, soy Mariel Ferreyra, Senior QA Automation Engineer especializada en IA.

[PROBLEMA - 1 min]
${article.title}. Esto pasa porque...

[DESARROLLO - 4 min]
${article.body?.slice(0, 400)}

[CONCLUSIÓN - 30 seg]
Si te resultó útil, suscribite y dejá tu comentario.`
}

export default function Distribute() {
  const article = useArticle()
  const navigate = useNavigate()
  const [tab, setTab] = useState('li-post')

  const tabs = [
    { id: 'li-post', label: 'LinkedIn · Post' },
    { id: 'li-carousel', label: 'LinkedIn · Carrusel' },
    { id: 'ig', label: 'Instagram · Caption' },
    { id: 'yt', label: 'YouTube · Descripción' },
  ]

  const contentMap = {
    'li-post': buildLinkedIn(article),
    'li-carousel': buildLinkedInCarousel(article),
    'ig': buildInstagram(article),
    'yt': buildYouTube(article),
  }

  return (
    <div className="page">
      <Header />
      <main className="page-content">

        <h2 style={s.pageTitle}>Distribuir</h2>

        {article ? (
          <p style={s.articleRef}>
            Artículo: <strong style={{ color: '#a78bfa' }}>{article.title}</strong>
          </p>
        ) : (
          <div style={s.noArticle}>
            No hay artículo reciente. Creá uno desde{' '}
            <button style={s.inlineLink} onClick={() => navigate('/edicion')}>Edición</button>.
          </div>
        )}

        {/* Tabs */}
        <div style={s.tabs}>
          {tabs.map(t => (
            <button
              key={t.id}
              style={{ ...s.tab, ...(tab === t.id ? s.tabActive : {}) }}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <CopyBox
          label={tabs.find(t => t.id === tab)?.label}
          content={contentMap[tab]}
          note={tab === 'ig' ? '+ hashtags incluidos' : tab === 'yt' ? 'incluye descripción + guión' : null}
        />

      </main>

      {/* Footer */}
      <footer style={s.footer}>
        <div style={s.footerInner}>
          <button style={s.footerLink} onClick={() => navigate('/edicion')}>← Anterior</button>
          <div style={s.footerCenter}>
            <a href="https://buffer.com" target="_blank" rel="noopener noreferrer" style={s.footerBtn}>
              Buffer
            </a>
          </div>
          <button style={s.footerLink} onClick={() => navigate('/')}>Inicio →</button>
        </div>
      </footer>
    </div>
  )
}

const s = {
  pageTitle: {
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 8,
    color: '#fff',
  },
  articleRef: {
    fontSize: 13,
    color: '#888',
    marginBottom: 28,
  },
  noArticle: {
    fontSize: 13,
    color: '#888',
    marginBottom: 28,
    padding: '12px 16px',
    background: '#181818',
    borderRadius: 8,
    border: '1px solid #333',
  },
  inlineLink: {
    background: 'none',
    border: 'none',
    color: '#a78bfa',
    fontSize: 13,
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  tabs: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
    borderBottom: '1px solid #222',
    paddingBottom: 16,
  },
  tab: {
    background: 'transparent',
    border: '1.5px solid #333',
    color: '#888',
    fontSize: 13,
    fontWeight: 500,
    padding: '7px 16px',
    borderRadius: 999,
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  tabActive: {
    background: '#1e1256',
    border: '1.5px solid #7c3aed',
    color: '#a78bfa',
  },
  copyBox: {
    background: '#181818',
    border: '1px solid #2a2a2a',
    borderRadius: 10,
    overflow: 'hidden',
  },
  copyHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '12px 16px',
    borderBottom: '1px solid #2a2a2a',
    background: '#1a1a1a',
    flexWrap: 'wrap',
  },
  copyLabel: {
    fontSize: 12,
    fontWeight: 600,
    color: '#888',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    flex: 1,
  },
  copyNote: {
    fontSize: 11,
    color: '#555',
    fontStyle: 'italic',
  },
  copyBtn: (copied) => ({
    background: copied ? '#052e16' : '#222',
    border: `1px solid ${copied ? '#166534' : '#333'}`,
    color: copied ? '#4ade80' : '#fff',
    fontSize: 12,
    fontWeight: 600,
    padding: '5px 14px',
    borderRadius: 999,
    cursor: 'pointer',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
  }),
  pre: {
    padding: '20px',
    fontSize: 13,
    lineHeight: 1.8,
    color: '#ccc',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    overflowY: 'auto',
    maxHeight: 480,
    margin: 0,
    fontFamily: 'Inter, sans-serif',
  },
  footer: {
    borderTop: '1px solid #ffffff22',
    padding: '20px 24px',
  },
  footerInner: {
    maxWidth: 1100,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerLink: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
    opacity: 0.8,
  },
  footerCenter: {
    display: 'flex',
    gap: 10,
  },
  footerBtn: {
    fontSize: 13,
    fontWeight: 500,
    color: '#fff',
    border: '1.5px solid #7c3aed',
    borderRadius: 999,
    padding: '7px 20px',
    background: 'transparent',
    cursor: 'pointer',
    textDecoration: 'none',
  },
}
