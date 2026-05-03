export default function PdfViewer({ src, title = 'Documento PDF', height = 600 }) {
  return (
    <div style={s.wrapper}>
      <div style={s.header}>
        <span style={s.label}>{title}</span>
        <a href={src} target="_blank" rel="noopener noreferrer" style={s.link}>
          Abrir en nueva pestaña ↗
        </a>
      </div>
      <iframe
        src={src}
        title={title}
        style={{ ...s.frame, height }}
      />
    </div>
  )
}

const s = {
  wrapper: {
    margin: '32px 0',
    border: '1px solid #2a2a2a',
    borderRadius: 12,
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    background: '#181818',
    borderBottom: '1px solid #2a2a2a',
  },
  label: { fontSize: 14, fontWeight: 600, color: '#fff' },
  link: { fontSize: 12, color: '#4ffbdf', textDecoration: 'none' },
  frame: { width: '100%', border: 'none', background: '#fff', display: 'block' },
}
