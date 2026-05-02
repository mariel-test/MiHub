import { createContext, useContext, useState, useCallback } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null)

  const login = useCallback(async (password) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ password }),
    })
    if (!res.ok) {
      const err = await res.json()
      throw new Error(err.error || 'Error al iniciar sesión')
    }
    const { accessToken: token } = await res.json()
    setAccessToken(token)
    return token
  }, [])

  const refresh = useCallback(async () => {
    try {
      const res = await fetch('/api/auth/refresh', {
        method: 'POST',
        credentials: 'include',
      })
      if (!res.ok) { setAccessToken(null); return null }
      const { accessToken: token } = await res.json()
      setAccessToken(token)
      return token
    } catch {
      setAccessToken(null)
      return null
    }
  }, [])

  const logout = useCallback(async () => {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' })
    setAccessToken(null)
  }, [])

  return (
    <AuthContext.Provider value={{ accessToken, login, refresh, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
