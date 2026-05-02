import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { useAuth } from '../context/AuthContext'

const MAX_CHARS = 1500

export default function Edition() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [pdfs, setPdfs] = useState(() => {
    try { return JSON.parse(localStorage.getItem('myhub_pdfs') || '[]') } catch { return [] }
  })
  const [published, setPublished] = useState(false)
  const fileRef = useRef()
  const navigate = useNavigate()
  const { logout } = useAuth()

  async function handleLogout() {
    await logout()
    navigate('/login', { replace: true })
  }

  const remaining = MAX_CHARS - body.length

  function handlePublish() {
    if (!title.trim() || !body.trim()) return
    const articles = JSON.parse(localStorage.getItem('myhub_articles') || '[]')
    articles.unshift({
      title: title.trim(),
      body: body.trim(),
      date: new Date().toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' }),
    })
    localStorage.setItem('myhub_articles', JSON.stringify(articles))
    setPublished(true)
    setTimeout(() => {
      setTitle('')
      setBody('')
      setPublished(false)
    }, 2000)
  }

  function handlePdfUpload(e) {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const updated = [...pdfs, { name: file.name, url: ev.target.result }]
      setPdfs(updated)
      localStorage.setItem('myhub_pdfs', JSON.stringify(updated))
    }
    reader.readAsDataURL(file)
  }

  function removePdf(i) {
    const updated = pdfs.filter((_, idx) => idx !== i)
    setPdfs(updated)
    localStorage.setItem('myhub_pdfs', JSON.stringify(updated))
  }

  function insertFormat(tag) {
    const area = document.getElementById('edition-body')
    const start = area.selectionStart
    const end = area.selectionEnd
    const selected = body.slice(start, end)
    let insert = ''
    if (tag === 'bold') insert = `**${selected || 'texto'}**`
    if (tag === 'italic') insert = `_${selected || 'texto'}_`
    if (tag === 'link') insert = `[${selected || 'texto'}](url)`
    if (tag === 'bullet') insert = `\n• ${selected || 'item'}`
    if (tag === 'heading') insert = `\n## ${selected || 'Título'}`
    const newBody = body.slice(0, start) + insert + body.slice(end)
    if (newBody.length <= MAX_CHARS) setBody(newBody)
  }

  return (
    <div className="page">
      <Header />
      <main className="page-content">

        <h2 style={s.pageTitle}>Edición</h2>

        {/* Title */}
        <div style={s.field}>
          <label style={s.label}>Título del artículo</label>
          <input
            style={s.input}
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Escribe el título aquí..."
            maxLength={120}
          />
        </div>

        {/* Toolbar */}
        <div style={s.toolbar}>
          {[
            { id: 'bold', label: 'B', title: 'Negrita' },
            { id: 'italic', label: 'I', title: 'Cursiva' },
            { id: 'heading', label: 'H2', title: 'Título' },
            { id: 'bullet', label: '•', title: 'Bullet' },
            { id: 'link', label: '🔗', title: 'Link' },
          ].map(({ id, label, title: ttl }) => (
            <button key={id} style={s.toolBtn} title={ttl} onClick={() => insertFormat(id)}>
              {label}
            </button>
          ))}
          <span style={s.charCount(remaining)}>
            {remaining} caracteres restantes
          </span>
        </div>

        {/* Body editor */}
        <div style={s.field}>
          <textarea
            id="edition-body"
            style={s.textarea}
            value={body}
            onChange={e => e.target.value.length <= MAX_CHARS && setBody(e.target.value)}
            placeholder="Escribe tu artículo, post de LinkedIn o caption de Instagram... (máx. 1500 caracteres)"
            rows={16}
          />
        </div>

        {/* PDF upload */}
        <div style={s.pdfSection}>
          <label style={s.label}>Infografías / PDFs</label>
          <div style={s.pdfRow}>
            <button style={s.uploadBtn} onClick={() => fileRef.current.click()}>
              + Subir PDF
            </button>
            <input
              ref={fileRef}
              type="file"
              accept=".pdf"
              style={{ display: 'none' }}
              onChange={handlePdfUpload}
            />
            {pdfs.map((p, i) => (
              <div key={i} style={s.pdfChip}>
                <span style={{ fontSize: 12, color: '#ccc', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 140 }}>{p.name}</span>
                <button style={s.removeBtn} onClick={() => removePdf(i)}>×</button>
              </div>
            ))}
          </div>
        </div>

        {published && (
          <div style={s.successBanner}>
            ✓ Artículo publicado en Artículos
          </div>
        )}

      </main>

      {/* Footer */}
      <footer style={s.footer}>
        <div style={s.footerInner}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button style={s.footerLink} onClick={() => navigate('/articulos')}>← Anterior</button>
            <button style={s.logoutBtn} onClick={handleLogout}>Cerrar sesión</button>
          </div>
          <div style={s.footerCenter}>
            <a
              href="https://buffer.com"
              target="_blank"
              rel="noopener noreferrer"
              style={s.footerBtn}
            >
              Buffer
            </a>
            <button style={s.footerBtn} onClick={() => navigate('/distribuir')}>
              Distribuir
            </button>
            <button
              style={{ ...s.footerBtn, background: '#7c3aed', border: 'none', color: '#fff' }}
              onClick={handlePublish}
            >
              Publicar
            </button>
          </div>
          <button style={s.footerLink} onClick={() => navigate('/distribuir')}>Siguiente →</button>
        </div>
      </footer>
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
  field: {
    marginBottom: 16,
  },
  label: {
    display: 'block',
    fontSize: 12,
    fontWeight: 600,
    color: '#888',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    background: '#181818',
    border: '1px solid #333',
    borderRadius: 8,
    color: '#fff',
    fontSize: 18,
    fontWeight: 600,
    padding: '12px 16px',
    outline: 'none',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
    padding: '8px 12px',
    background: '#181818',
    borderRadius: '8px 8px 0 0',
    border: '1px solid #333',
    borderBottom: 'none',
    flexWrap: 'wrap',
  },
  toolBtn: {
    background: '#222',
    border: '1px solid #333',
    color: '#fff',
    fontSize: 13,
    fontWeight: 700,
    padding: '4px 10px',
    borderRadius: 4,
    cursor: 'pointer',
  },
  charCount: (n) => ({
    marginLeft: 'auto',
    fontSize: 12,
    color: n < 100 ? '#ef4444' : n < 300 ? '#f59e0b' : '#555',
    fontWeight: 500,
  }),
  textarea: {
    width: '100%',
    background: '#181818',
    border: '1px solid #333',
    borderRadius: '0 0 8px 8px',
    color: '#fff',
    fontSize: 14,
    lineHeight: 1.75,
    padding: '14px 16px',
    outline: 'none',
    resize: 'vertical',
  },
  pdfSection: {
    marginTop: 24,
    marginBottom: 24,
  },
  pdfRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    alignItems: 'center',
  },
  uploadBtn: {
    background: '#222',
    border: '1.5px dashed #444',
    color: '#aaa',
    fontSize: 13,
    padding: '7px 16px',
    borderRadius: 8,
    cursor: 'pointer',
  },
  pdfChip: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    background: '#1a1a1a',
    border: '1px solid #333',
    borderRadius: 20,
    padding: '4px 10px',
  },
  removeBtn: {
    background: 'none',
    border: 'none',
    color: '#666',
    fontSize: 16,
    cursor: 'pointer',
    lineHeight: 1,
  },
  successBanner: {
    background: '#052e16',
    border: '1px solid #166534',
    color: '#4ade80',
    borderRadius: 8,
    padding: '12px 16px',
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 16,
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
  },
  logoutBtn: {
    background: 'none',
    border: '1px solid #3f3f3f',
    color: '#888',
    fontSize: 13,
    fontWeight: 500,
    padding: '5px 14px',
    borderRadius: 999,
    cursor: 'pointer',
  },
}
