const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

rl.question('Ingresá tu contraseña: ', async (password) => {
  rl.close()
  const hash = await bcrypt.hash(password.trim(), 12)
  const jwtSecret = crypto.randomBytes(64).toString('hex')
  const refreshSecret = crypto.randomBytes(64).toString('hex')

  const env = `JWT_SECRET=${jwtSecret}
REFRESH_SECRET=${refreshSecret}
PASSWORD_HASH=${hash}
CLIENT_ORIGIN=http://localhost:5173
PORT=3001
`
  fs.writeFileSync('.env', env)
  console.log('\n✅ .env generado correctamente.')
  console.log('   Guardá la contraseña que ingresaste — no se almacena en ningún lado.')
})
