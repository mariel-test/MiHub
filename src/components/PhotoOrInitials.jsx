import { useState, useRef } from 'react'

const STORAGE_KEY = 'myhub_avatar'

export default function PhotoOrInitials({ size = 120 }) {
  const saved = localStorage.getItem(STORAGE_KEY)
  const [src, setSrc] = useState(saved || '/foto.jpeg')
  const [err, setErr] = useState(false)
  const inputRef = useRef()

  function handleFile(e) {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const dataUrl = ev.target.result
      localStorage.setItem(STORAGE_KEY, dataUrl)
      setSrc(dataUrl)
      setErr(false)
    }
    reader.readAsDataURL(file)
  }

  const circle = {
    width: size,
    height: size,
    borderRadius: '50%',
    border: '3px solid #7c3aed',
    flexShrink: 0,
    display: 'block',
  }

  if (err) return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <div style={{
        ...circle,
        background: 'linear-gradient(135deg,#7c3aed,#1e1256)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size * 0.33,
        fontWeight: 900,
        color: '#fff',
        letterSpacing: '-2px',
        cursor: 'pointer',
      }}
        onClick={() => inputRef.current.click()}
        title="Subir foto"
      >
        MF
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFile}
      />
    </div>
  )

  return (
    <img
      src={src}
      alt="Mariel Ferreyra"
      style={{ ...circle, objectFit: 'cover', objectPosition: 'center top' }}
      onError={() => setErr(true)}
    />
  )
}
