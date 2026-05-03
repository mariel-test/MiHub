import { useState } from 'react'

export default function Carousel({ items = [] }) {
  const [idx, setIdx] = useState(0)

  if (items.length === 0) return null

  const prev = () => setIdx(i => (i - 1 + items.length) % items.length)
  const next = () => setIdx(i => (i + 1) % items.length)
  const item = items[idx]

  return (
    <div style={s.wrapper}>
      <div style={s.frame}>
        <img src={item.src} alt={item.caption ?? item.alt ?? ''} style={s.img} />
      </div>
      {items.length > 1 && (
        <div style={s.controls}>
          <button style={s.btn} onClick={prev} aria-label="Anterior">‹</button>
          <div style={s.dots}>
            {items.map((_, i) => (
              <button
                key={i}
                style={{ ...s.dot, ...(i === idx ? s.dotActive : {}) }}
                onClick={() => setIdx(i)}
                aria-label={`Imagen ${i + 1}`}
              />
            ))}
          </div>
          <button style={s.btn} onClick={next} aria-label="Siguiente">›</button>
        </div>
      )}
      {item.caption && <p style={s.caption}>{item.caption}</p>}
    </div>
  )
}

const s = {
  wrapper: {
    margin: '32px 0',
    background: '#0d0d0d',
    borderRadius: 12,
    overflow: 'hidden',
    border: '1px solid #2a2a2a',
  },
  frame: {
    width: '100%',
    aspectRatio: '16/9',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#111',
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    display: 'block',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 16px',
    background: '#111',
  },
  btn: {
    background: '#1e1e1e',
    border: '1px solid #333',
    color: '#fff',
    fontSize: 22,
    width: 36,
    height: 36,
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  dots: { display: 'flex', gap: 6, alignItems: 'center' },
  dot: {
    width: 8, height: 8, borderRadius: '50%',
    background: '#444', border: 'none', cursor: 'pointer', padding: 0,
  },
  dotActive: { background: '#7c3aed' },
  caption: {
    fontSize: 13, color: '#666', textAlign: 'center',
    padding: '10px 16px 14px', background: '#111',
  },
}
