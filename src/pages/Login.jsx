import { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [pwd, setPwd] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/edicion'

  async function handleSubmit(e) {
    e.preventDefault()
    if (!pwd) return
    setLoading(true)
    setError('')
    try {
      await login(pwd)
      navigate(from, { replace: true })
    } catch (err) {
      setError(err.message)
      setPwd('')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={s.page}>
      <header style={s.header}>
        <Link to="/" style={s.homeLink}>Home</Link>
      </header>
      <div style={s.card}>
        <p style={s.subtitle}>Área privada</p>

        <form onSubmit={handleSubmit} style={s.form}>
          <input
            type="password"
            value={pwd}
            onChange={e => { setPwd(e.target.value); setError('') }}
            placeholder="Contraseña"
            style={{ ...s.input, ...(error ? s.inputError : {}) }}
            autoFocus
            disabled={loading}
          />
          {error && <p style={s.errorMsg}>{error}</p>}
          <button type="submit" style={{ ...s.btn, opacity: loading ? 0.7 : 1 }} disabled={loading}>
            {loading ? 'Verificando...' : 'Ingresar'}
          </button>
        </form>
      </div>
    </div>
  )
}

const s = {
  page: {
    minHeight: '100vh',
    background: '#0d0d0d',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    padding: '16px 32px',
    borderBottom: '1px solid #1e1e1e',
    background: '#0d0d0d',
  },
  homeLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 600,
    letterSpacing: '0.05em',
  },
  card: {
    background: '#181818',
    border: '1px solid #2a2a2a',
    borderRadius: 16,
    padding: '48px 40px',
    width: '100%',
    maxWidth: 380,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '0.85rem',
    color: '#555',
    marginBottom: 36,
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  input: {
    background: '#111',
    border: '1.5px solid #333',
    borderRadius: 8,
    color: '#fff',
    fontSize: '1rem',
    padding: '12px 16px',
    outline: 'none',
    textAlign: 'center',
    letterSpacing: '0.1em',
  },
  inputError: {
    borderColor: '#ef4444',
  },
  errorMsg: {
    fontSize: '0.85rem',
    color: '#ef4444',
  },
  btn: {
    background: '#7c3aed',
    border: 'none',
    borderRadius: 8,
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 600,
    padding: '12px',
    marginTop: 4,
    cursor: 'pointer',
  },
}
