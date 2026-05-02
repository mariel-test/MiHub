const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const rateLimit = require('express-rate-limit')

const router = express.Router()

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => res.status(429).json({
    error: 'Demasiados intentos. Bloqueado por 15 minutos.'
  }),
})

function signTokens(payload) {
  const accessToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '15m' })
  const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, { expiresIn: '7d' })
  return { accessToken, refreshToken }
}

function setRefreshCookie(res, token) {
  res.cookie('refresh_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: '/api/auth/refresh',
  })
}

// POST /api/auth/login
router.post('/login', loginLimiter, async (req, res) => {
  const { password } = req.body
  if (!password) return res.status(400).json({ error: 'Contraseña requerida' })

  const valid = await bcrypt.compare(password, process.env.PASSWORD_HASH)
  if (!valid) return res.status(401).json({ error: 'Contraseña incorrecta' })

  const { accessToken, refreshToken } = signTokens({ role: 'admin' })
  setRefreshCookie(res, refreshToken)
  res.json({ accessToken })
})

// POST /api/auth/refresh
router.post('/refresh', (req, res) => {
  const token = req.cookies?.refresh_token
  if (!token) return res.status(401).json({ error: 'Sin refresh token' })

  try {
    const payload = jwt.verify(token, process.env.REFRESH_SECRET)
    const { accessToken, refreshToken } = signTokens({ role: payload.role })
    setRefreshCookie(res, refreshToken)
    res.json({ accessToken })
  } catch {
    res.clearCookie('refresh_token', { path: '/api/auth/refresh' })
    res.status(401).json({ error: 'Refresh token inválido' })
  }
})

// POST /api/auth/logout
router.post('/logout', (req, res) => {
  res.clearCookie('refresh_token', { path: '/api/auth/refresh' })
  res.json({ ok: true })
})

module.exports = router
