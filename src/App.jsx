import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Articles from './pages/Articles'
import Edition from './pages/Edition'
import Distribute from './pages/Distribute'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/articulos" element={<Articles />} />
          <Route path="/login" element={<Login />} />
          <Route path="/edicion" element={
            <ProtectedRoute><Edition /></ProtectedRoute>
          } />
          <Route path="/distribuir" element={
            <ProtectedRoute><Distribute /></ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
