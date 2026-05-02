require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth')

const app = express()

app.use(helmet())

app.use(cors({
  origin: process.env.CLIENT_ORIGIN,
  credentials: true,
}))

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)

// Ruta protegida de ejemplo — agregá las tuyas acá
const requireAuth = require('./middleware/authMiddleware')
app.get('/api/me', requireAuth, (req, res) => res.json({ role: req.user.role }))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server corriendo en http://localhost:${PORT}`))
