import { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children }) {
  const { accessToken, refresh } = useAuth()
  const location = useLocation()
  const [checking, setChecking] = useState(!accessToken)

  useEffect(() => {
    if (accessToken) { setChecking(false); return }
    refresh().finally(() => setChecking(false))
  }, [])

  if (checking) return (
    <div style={{ minHeight: '100vh', background: '#0d0d0d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 32, height: 32, border: '3px solid #7c3aed', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  )

  if (!accessToken) return <Navigate to="/login" state={{ from: location.pathname }} replace />

  return children
}
