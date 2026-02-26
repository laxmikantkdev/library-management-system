
import { createContext, useContext, useState } from 'react'
import { jwtDecode } from 'jwt-decode'

interface AuthType {
  token: string | null
  role: string | null
  login: (t: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthType | null>(null)

export const AuthProvider = ({ children }: any) => {
  const stored = localStorage.getItem('token')
  const [token, setToken] = useState<string | null>(stored)
  const [role, setRole] = useState<string | null>(
    stored ? (jwtDecode(stored) as any).role : null
  )

  const login = (t: string) => {
    localStorage.setItem('token', t)
    setToken(t)
    setRole((jwtDecode(t) as any).role)
  }

  const logout = () => {
    localStorage.clear()
    setToken(null)
    setRole(null)
  }

  return (
    <AuthContext.Provider value={{ token, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("AuthContext error")
  return ctx
}
